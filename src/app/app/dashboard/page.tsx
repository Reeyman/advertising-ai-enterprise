"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Me = { id: string; email?: string | null };

export default function Dashboard() {
  const [me, setMe] = useState<Me | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setErr(error.message);
        return;
      }
      setMe({ id: data.user?.id ?? "", email: data.user?.email });
    })();
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/app/login";
  }

  return (
    <main className="p-6 font-sans">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-sm opacity-80">Here begins the real product UI.</p>

      <div className="mt-6 rounded-md border p-4 space-y-2">
        <div className="text-sm opacity-80">Signed in as:</div>
        <div className="font-medium">{me?.email || "…"}</div>
        <div className="text-xs opacity-70 break-all">user_id: {me?.id || "…"}</div>
        {err ? <div className="text-sm text-red-600">{err}</div> : null}
      </div>

      <div className="mt-6 flex gap-3">
        <a className="underline" href="/app/settings">Settings</a>
        <a className="underline" href="/app/me">Me</a>
        <button className="rounded-md border px-4 py-2" onClick={logout}>
          Logout
        </button>
      </div>
    </main>
  );
}
