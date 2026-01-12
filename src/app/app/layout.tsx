import type { ReactNode } from "react";
import Link from "next/link";
import { AuthButton } from "./AuthButton";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
          <Link className="font-semibold" href="/">
            Advertising AI
          </Link>

          <nav className="flex gap-4 text-sm">
            <Link className="underline" href="/app/dashboard">
              Dashboard
            </Link>
            <Link className="underline" href="/app/settings">
              Settings
            </Link>

            <AuthButton />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl p-6">{children}</main>
    </div>
  );
}

