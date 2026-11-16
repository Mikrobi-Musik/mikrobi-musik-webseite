import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

function getR2Client(): S3Client {
  // Prüft beide gängigen Namen für die Account ID, um Fehler zu vermeiden
  const accountId = process.env.R2_ACCOUNT_ID || process.env.CLOUDFLARE_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    console.error("🚨 KRITISCHER R2-FEHLER: Zugangsdaten fehlen im Worker!", {
      hatAccountId: !!accountId,
      hatAccessKey: !!accessKeyId,
      hatSecret: !!secretAccessKey
    });
  }

  return new S3Client({
    region: "auto",
    // Fallback auf "FEHLT", damit das SDK niemals auf der Festplatte sucht
    endpoint: `https://${accountId || "FEHLT"}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: accessKeyId || "FEHLT",
      secretAccessKey: secretAccessKey || "FEHLT",
    },
  });
}

function getBucketName(): string {
  return process.env.R2_BUCKET_NAME || "mikrobi-musik-audio";
}

export async function createAudioUploadUrl(
  audioKey: string,
  contentType = "audio/mpeg"
): Promise<string> {
  const client = getR2Client();
  const command = new PutObjectCommand({
    Bucket: getBucketName(),
    Key: audioKey,
    ContentType: contentType,
  });

  return getSignedUrl(client, command, { expiresIn: 300 });
}

export async function deleteAudioObject(audioKey: string): Promise<void> {
  const client = getR2Client();
  const command = new DeleteObjectCommand({
    Bucket: getBucketName(),
    Key: audioKey,
  });

  await client.send(command);
}