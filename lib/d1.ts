export interface SongRecord {
  id: string;
  slug: string;
  recipient: string;
  title: string;
  lyrics: string | null;
  message: string | null;
  audio_key: string;
  created_at: number;
}

interface D1Response<T> {
  success: boolean;
  errors?: Array<{ message: string }>;
  result?: Array<{
    results: T[];
    success: boolean;
  }>;
}

async function queryD1<T = unknown>(sql: string, params: unknown[] = []): Promise<T[]> {
  // Nutzt R2_ACCOUNT_ID als Fallback, falls CLOUDFLARE_ACCOUNT_ID fehlt
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.R2_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
  const apiToken = process.env.CLOUDFLARE_D1_API_TOKEN;

  if (!accountId || !databaseId || !apiToken) {
    console.error("🚨 KRITISCHER D1-FEHLER: Datenbank-Zugangsdaten fehlen im Worker!", {
      hatAccountId: !!accountId,
      hatDatabaseId: !!databaseId,
      hatApiToken: !!apiToken
    });
    throw new Error("Cloudflare D1 Umgebungsvariablen fehlen. Prüfe die Worker-Einstellungen.");
  }

  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sql, params }),
    cache: "no-store",
  });

  const data = (await response.json()) as D1Response<T>;

  if (!response.ok || !data.success) {
    const errMsg = data.errors?.map((e) => e.message).join(", ") || response.statusText;
    console.error(`🚨 D1-ABFRAGE FEHLGESCHLAGEN: ${errMsg}`);
    throw new Error(`D1-Abfrage fehlgeschlagen: ${errMsg}`);
  }

  return data.result?.[0]?.results ?? [];
}

export async function getAllSongs(): Promise<SongRecord[]> {
  return queryD1<SongRecord>("SELECT * FROM songs ORDER BY created_at DESC");
}

export async function getSongBySlug(slug: string): Promise<SongRecord | null> {
  const rows = await queryD1<SongRecord>("SELECT * FROM songs WHERE slug = ? LIMIT 1", [slug]);
  return rows[0] ?? null;
}

export async function insertSong(song: SongRecord): Promise<void> {
  await queryD1(
    `INSERT INTO songs (id, slug, recipient, title, lyrics, message, audio_key, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      song.id,
      song.slug,
      song.recipient,
      song.title,
      song.lyrics,
      song.message,
      song.audio_key,
      song.created_at,
    ]
  );
}

export async function deleteSongById(id: string): Promise<SongRecord | null> {
  const rows = await queryD1<SongRecord>("SELECT * FROM songs WHERE id = ? LIMIT 1", [id]);
  const existing = rows[0];
  if (!existing) return null;

  await queryD1("DELETE FROM songs WHERE id = ?", [id]);
  return existing;
}