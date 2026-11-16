import { NextRequest, NextResponse } from "next/server";
import { createAudioUploadUrl } from "@/lib/r2";

export async function POST(request: NextRequest) {
  try {
    const { filename, contentType } = (await request.json()) as {
      filename?: string;
      contentType?: string;
    };

    // 100% Cloudflare-kompatibel: Native Web Crypto API statt 'nanoid' Paket
    const slug = crypto.randomUUID().substring(0, 8);
    const ext = filename?.split(".").pop()?.toLowerCase() || "mp3";
    const audioKey = `songs/${slug}.${ext}`;
    const type = contentType || "audio/mpeg";

    const uploadUrl = await createAudioUploadUrl(audioKey, type);

    return NextResponse.json({ uploadUrl, audioKey, slug });
  } catch (err) {
    // WICHTIG: Den echten Fehlertext in die Cloudflare-Protokolle schreiben!
    console.error("🚨 FEHLER IN UPLOAD-URL ROUTE:", err);
    const message = err instanceof Error ? err.message : "Upload-URL konnte nicht erzeugt werden.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}