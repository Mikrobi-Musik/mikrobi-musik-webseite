import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, verifyAdminToken } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login-Seite und Login-API selbst immer durchlassen
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const isValid = await verifyAdminToken(token);

  if (!isValid) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
    }
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};