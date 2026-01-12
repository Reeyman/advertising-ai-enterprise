import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (!pathname.startsWith("/app")) return NextResponse.next();
  if (pathname === "/app/login" || pathname.startsWith("/app/auth")) {
    return NextResponse.next();
  }

  const cookieNames = req.cookies.getAll().map((c) => c.name);

  // acceptăm mai multe variante în dev
  const hasAuthCookie =
    cookieNames.some((n) => n.startsWith("sb-")) ||
    cookieNames.some((n) => n.includes("supabase")) ||
    cookieNames.some((n) => n.includes("access-token")) ||
    cookieNames.some((n) => n.includes("refresh-token"));

  if (!hasAuthCookie) {
    const url = req.nextUrl.clone();
    url.pathname = "/app/login";
    url.searchParams.set("next", pathname + search);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/app/:path*"] };
