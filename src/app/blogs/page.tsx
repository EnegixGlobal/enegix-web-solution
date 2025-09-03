import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/Container";
import ScrollToTopButton from "@/components/scroll-to-top";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

type Blog = {
	_id: string;
	title: string;
	slug: string;
	excerpt: string;
	image: string;
	category: string;
	readTime?: string;
	createdAt?: string;
	publishedAt?: string;
};

type CategoryStat = { _id: string; count: number };

async function getBlogs(baseUrl: string, query: string) {
	const res = await fetch(`${baseUrl}/api/blogs?${query}`, { cache: "no-store" });
	if (!res.ok) throw new Error("Failed to fetch blogs");
	return res.json();
}

export default async function BlogsPage({
	searchParams,
}: {
	searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const resolvedSearchParams = await searchParams;
	const params = new URLSearchParams();
	params.set("status", "published");
	params.set("limit", "12");
	if (resolvedSearchParams?.category && typeof resolvedSearchParams.category === "string") {
		params.set("category", resolvedSearchParams.category);
	}
		if (resolvedSearchParams?.status && typeof resolvedSearchParams.status === "string") {
			params.set("status", resolvedSearchParams.status);
		}

		const h = await headers();
		const host = h.get("host");
		const proto = h.get("x-forwarded-proto") || "http";
		const baseUrl = `${proto}://${host}`;

		const data = await getBlogs(baseUrl, params.toString()).catch(() => ({ success: false }));
	const blogs: Blog[] = data?.data?.blogs ?? [];
	const categoryStats: CategoryStat[] = data?.data?.categoryStats ?? [];
	const activeCategory = resolvedSearchParams?.category as string | undefined;

	return (
		<main className="min-h-screen bg-gray-50">
			<Navbar />

			{/* Hero Section */}
					<section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white">
						<div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat" />
				<Container>
					<div className="relative z-10 py-16 md:py-20">
						<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Insights & Stories</h1>
						<p className="mt-4 max-w-2xl text-teal-100">
							Web development, design, SEO, and digital growth tips from Enegix Web Solutions.
						</p>

						{categoryStats.length > 0 && (
							<div className="mt-8 flex flex-wrap gap-2">
								<Link
									href="/blogs"
									className={`rounded-full border px-4 py-1.5 text-sm transition ${!activeCategory ? 'bg-white text-teal-700 border-white' : 'border-teal-300 text-white hover:bg-white/10'}`}
								>
									All
								</Link>
								{categoryStats.map((c) => (
									<Link
										key={c._id}
										href={`/blogs?category=${encodeURIComponent(c._id)}`}
										className={`rounded-full border px-4 py-1.5 text-sm transition ${activeCategory === c._id ? 'bg-white text-teal-700 border-white' : 'border-teal-300 text-white hover:bg-white/10'}`}
									>
										{c._id} <span className="ml-1 opacity-80">({c.count})</span>
									</Link>
								))}
							</div>
						)}
					</div>
				</Container>
			</section>

			{/* Blog Grid */}
			<section className="py-12 md:py-16">
				<Container>
					{blogs.length === 0 ? (
						<div className="py-20 text-center text-gray-500">No blog posts found.</div>
					) : (
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{blogs.map((post) => (
								<article
									key={post._id}
									className="group relative overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition hover:shadow-lg"
								>
									<div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 to-transparent opacity-0 transition group-hover:opacity-100" />
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
										<Link href={`/blogs/${encodeURIComponent(post.slug)}`} className="block">
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
																		href={`/blogs/${encodeURIComponent(post.slug)}`}
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
				</Container>
			</section>

			<Footer />
			<ScrollToTopButton />
		</main>
	);
}

export async function generateMetadata() {
	const title = "Blog | Enegix Web Solutions";
	const description = "Insights on web development, design, SEO, and digital growth from Enegix Web Solutions.";
	return {
		title,
		description,
		openGraph: { title, description },
		twitter: { card: "summary_large_image", title, description },
	} as const;
}

