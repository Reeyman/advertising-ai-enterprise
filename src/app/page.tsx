export default function Home() {
  return (
    <main className="p-6 font-sans">
      <h1 className="text-2xl font-semibold">Advertising AI</h1>
      <p className="mt-2 text-sm opacity-80">Marketing landing page (public).</p>

      <div className="mt-6 flex gap-4">
        <a className="underline" href="/app">Go to app →</a>
        <a className="underline" href="/api/debug/supabase-ping">Supabase ping</a>
        <a className="underline" href="/api/health">Health</a>
      </div>
    </main>
  );
}
