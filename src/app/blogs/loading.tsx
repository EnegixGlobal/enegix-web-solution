export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 h-6 w-40 animate-pulse rounded bg-gray-200" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
              <div className="mb-4 h-40 w-full animate-pulse rounded bg-gray-200" />
              <div className="mb-2 h-5 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
