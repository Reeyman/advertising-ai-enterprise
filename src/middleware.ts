import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(_req: NextRequest) {
  // passthrough: nu blocăm nimic încă
  return NextResponse.next();
}

// rulează pe aproape toate rutele, dar ignoră assets
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
