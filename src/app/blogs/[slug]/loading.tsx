export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-3 h-4 w-24 animate-pulse rounded bg-gray-200" />
        <div className="mb-6 h-8 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="mb-8 h-64 w-full animate-pulse rounded bg-gray-200" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4 w-full animate-pulse rounded bg-gray-200" />
          ))}
        </div>
      </section>
    </main>
  );
}
