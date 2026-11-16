import { AwsClient } from "aws4fetch";

function getAwsClient(): AwsClient {
  const accountId = process.env.R2_ACCOUNT_ID || process.env.CLOUDFLARE_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    console.error("🚨 KRITISCHER R2-FEHLER: Zugangsdaten fehlen!");
    throw new Error("R2 Umgebungsvariablen fehlen.");
  }

  return new AwsClient({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    service: "s3",
    region: "auto",
  });
}

function getBucketName(): string {
  return process.env.R2_BUCKET_NAME || "mikrobi-musik-audio";
}

export async function createAudioUploadUrl(
  audioKey: string,
  contentType = "audio/mpeg"
): Promise<string> {
  const client = getAwsClient();
  const accountId = process.env.R2_ACCOUNT_ID || process.env.CLOUDFLARE_ACCOUNT_ID;
  const bucketName = getBucketName();
  
  const url = new URL(`https://${accountId}.r2.cloudflarestorage.com/${bucketName}/${audioKey}`);
  
  // signQuery: true generiert die Presigned-URL für den direkten Upload
  const signedRequest = await client.sign(url.toString(), {
    method: "PUT",
    headers: {
      "Content-Type": contentType,
    },
    aws: { signQuery: true }, 
  });

  return signedRequest.url;
}

export async function deleteAudioObject(audioKey: string): Promise<void> {
  const client = getAwsClient();
  const accountId = process.env.R2_ACCOUNT_ID || process.env.CLOUDFLARE_ACCOUNT_ID;
  const bucketName = getBucketName();
  
  const url = `https://${accountId}.r2.cloudflarestorage.com/${bucketName}/${audioKey}`;
  
  const response = await client.fetch(url, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error(`Fehler beim Löschen: ${response.statusText}`);
  }
}