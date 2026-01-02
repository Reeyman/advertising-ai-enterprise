import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function GET() {
  // Nu expunem debug routes în prod
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not found", { status: 404 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  if (!url || !service) {
    return NextResponse.json(
      { ok: false, error: { message: "Missing env: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY" } },
      { status: 500 }
    );
  }

  const supabase = createClient(url, service, { auth: { persistSession: false } });

  // încercăm o interogare simplă; dacă tabela există, înseamnă că DB e ok
  const { error } = await supabase.from("profiles").select("id").limit(1);

  return NextResponse.json({ ok: !error, error: error ?? null });
}
