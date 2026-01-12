import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export const runtime = "nodejs";

export default async function MePage() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll() {
          // În Server Components nu setăm cookies aici.
          // (Setarea cookie-urilor se face în route handlers / middleware dacă e nevoie.)
        },
      },
    }
  );

  const { data, error } = await supabase.auth.getUser();
  const user = data?.user ?? null;

  return (
    <main className="p-6 font-sans">
      <h1 className="text-2xl font-semibold">Me</h1>

      {error ? (
        <p className="mt-2 text-sm opacity-80">
          Auth error: {error.message}
        </p>
      ) : (
        <p className="mt-2 text-sm opacity-80">
          {user ? `Logged in as: ${user.email}` : "Not logged in"}
        </p>
      )}
    </main>
  );
}
