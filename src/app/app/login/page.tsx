"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

// ✅ AICI pui tot codul tău actual care folosește useSearchParams()
function LoginInner() {
  const searchParams = useSearchParams();

  // ... restul codului tău existent (JSX, handlers, etc.)
  return (
    <main className="p-6">
      {/* pune aici UI-ul tău existent */}
      <div>Login</div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <LoginInner />
    </Suspense>
  );
}
