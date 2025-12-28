export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-surface to-surface-2">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-text mb-8">
          Advertising AI Enterprise
        </h1>
        <p className="text-center text-muted mb-8">
          AI-powered advertising platform for modern businesses
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
            <h2 className="text-xl font-semibold mb-4">AI Campaigns</h2>
            <p className="text-muted">
              Create intelligent advertising campaigns with AI
            </p>
          </div>
          <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p className="text-muted">
              Real-time performance tracking and insights
            </p>
          </div>
          <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
            <h2 className="text-xl font-semibold mb-4">Automation</h2>
            <p className="text-muted">Automated optimization and management</p>
          </div>
        </div>
      </div>
    </main>
  );
}
