import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, createAdminToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { password } = (await request.json()) as { password?: string };
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { error: "ADMIN_PASSWORD ist auf dem Server nicht konfiguriert." },
        { status: 500 }
      );
    }

    if (!password || password !== adminPassword) {
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
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }
}