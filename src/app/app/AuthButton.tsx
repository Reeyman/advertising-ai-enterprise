"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function AuthButton() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function load() {
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;
      setEmail(data.user?.email ?? null);
    }

    load();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null);
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function logout() {
    setLoading(true);
    try {
      await supabase.auth.signOut();
      // refresh hard ca middleware + UI să se alinieze
      window.location.href = "/app/login";
    } finally {
      setLoading(false);
    }
  }

  if (!email) {
    return (
      <a className="underline" href="/app/login">
        Login
      </a>
    );
  }

  return (
    <button className="underline" onClick={logout} disabled={loading}>
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}
