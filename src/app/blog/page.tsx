import Image from "next/image";
import Link from "next/link";

export const revalidate = 300; // ISR: revalidate every 5 minutes

type Blog = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author?: string;
  readTime?: string;
  createdAt?: string;
  publishedAt?: string;
};

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/blogs?status=published&limit=12`, {
    // Relative fetch works in Next server, but allow absolute when SITE_URL provided (useful for prod/prerender)
    cache: "force-cache",
    // If relative path (empty prefix), Next will handle it internally
  });

  // Fallback to relative path when NEXT_PUBLIC_SITE_URL isn't set
  if (!res.ok) {
    const fallback = await fetch(`/api/blogs?status=published&limit=12`, { cache: "no-store" });
    if (!fallback.ok) throw new Error("Failed to fetch blogs");
    return fallback.json();
  }
  return res.json();
}

export default async function BlogPage() {
  const data = await getBlogs().catch(() => ({ success: false }));

  const blogs: Blog[] = data?.data?.blogs ?? [];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Blog</h1>
          <p className="mt-3 text-gray-600">Insights on web development, design, SEO, and digital growth.</p>
        </header>

        {blogs.length === 0 ? (
          <div className="py-20 text-center text-gray-500">No blog posts found.</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <article key={post._id} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-teal-600/90 px-2.5 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-teal-700">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>

                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span>{post.readTime || "5 min read"}</span>
                    <span>
                      {(() => {
                        const d = post.publishedAt || post.createdAt;
                        return d ? new Date(d).toLocaleDateString() : "";
                      })()}
                    </span>
                  </div>

                  <div className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M12.97 4.97a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L17.94 12l-4.97-4.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M4.5 12a.75.75 0 01.75-.75h13.19a.75.75 0 010 1.5H5.25A.75.75 0 014.5 12z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
