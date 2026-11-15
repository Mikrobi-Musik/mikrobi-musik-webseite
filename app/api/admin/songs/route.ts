import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
export const runtime = "edge";
import { deleteSongById, getAllSongs, insertSong } from "@/lib/d1";
import { deleteAudioObject } from "@/lib/r2";

export async function GET() {
  try {
    const songs = await getAllSongs();
    return NextResponse.json({ songs });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Fehler beim Laden der Songs.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      slug?: string;
      recipient?: string;
      title?: string;
      lyrics?: string;
      message?: string;
      audio_key?: string;
    };

    if (!body.slug || !body.recipient?.trim() || !body.title?.trim() || !body.audio_key) {
      return NextResponse.json(
        { error: "Empfänger, Songtitel, Slug und Audiodatei sind Pflichtfelder." },
        { status: 400 }
      );
    }

    const song = {
      id: nanoid(12),
      slug: body.slug.trim(),
      recipient: body.recipient.trim(),
      title: body.title.trim(),
      lyrics: body.lyrics?.trim() || null,
      message: body.message?.trim() || null,
      audio_key: body.audio_key.trim(),
      created_at: Date.now(),
    };

    await insertSong(song);
    return NextResponse.json({ song });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Song konnte nicht gespeichert werden.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Song-ID fehlt." }, { status: 400 });
    }

    const deleted = await deleteSongById(id);
    if (!deleted) {
      return NextResponse.json({ error: "Song nicht gefunden." }, { status: 404 });
    }

    await deleteAudioObject(deleted.audio_key).catch(() => null);
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Löschen fehlgeschlagen.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}