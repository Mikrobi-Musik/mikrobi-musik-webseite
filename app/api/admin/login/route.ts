import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, createAdminToken } from "@/lib/auth";



export async function POST(request: NextRequest) {
  try {
    const { password } = (await request.json()) as { password?: string };
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("🚨 LOGIN-FEHLER: ADMIN_PASSWORD Umgebungsvariable fehlt oder ist leer!");
      return NextResponse.json(
        { error: "ADMIN_PASSWORD ist auf dem Server nicht konfiguriert." },
        { status: 500 }
      );
    }

    if (!password || password !== adminPassword) {
      console.warn("🚨 LOGIN-FEHLER: Falsches Passwort eingegeben.");
      return NextResponse.json({ error: "Falsches Passwort." }, { status: 401 });
    }

    const token = await createAdminToken();
    const response = NextResponse.json({ success: true });

    response.cookies.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 Tage
    });

    return response;
  } catch (error: any) {
    // 🔥 DAS IST DIE WICHTIGSTE ÄNDERUNG:
    // Wir schreiben den echten Fehler ins Cloudflare Echtzeit-Protokoll
    console.error("💥 KRITISCHER LOGIN-ABSTURZ:", error.message, error.stack);
    
    return NextResponse.json(
      { error: "Interner Fehler: " + (error.message || String(error)) },
      { status: 500 }
    );
  }
}