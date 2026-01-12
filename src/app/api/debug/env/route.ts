import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasAnonKey: !!process.env.SUPABASE_ANON_KEY,
    hasServiceRole: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,

    supabaseUrlLen: process.env.NEXT_PUBLIC_SUPABASE_URL?.length ?? 0,
    anonLen: process.env.SUPABASE_ANON_KEY?.length ?? 0,
    serviceRoleLen: process.env.SUPABASE_SERVICE_ROLE_KEY?.length ?? 0,
    nextAuthLen: process.env.NEXTAUTH_SECRET?.length ?? 0,
  });
}
