import Image from "next/image";
import type { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/Container";
import { headers } from "next/headers";
import SlideIn from "@/components/animate/SlideIn";

export const dynamic = "force-dynamic";

export const revalidate = 300;

type Blog = {
	_id: string;
	title: string;
	slug: string;
	content: string;
	image: string;
	category: string;
	author: string;
	readTime?: string;
	createdAt?: string;
	publishedAt?: string;
	metaTitle?: string;
	metaDescription?: string;
	tags?: string[];
	keywords?: string;
	views?: number;
	likes?: number;
};

async function getBlog(baseUrl: string, slug: string) {
	// Try slug endpoint first (your API supports id or slug lookup)
	const res = await fetch(`${baseUrl}/api/blogs/${slug}`, { cache: "no-store" });
	if (!res.ok) throw new Error("Failed to fetch blog");
	return res.json();
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
	const h = await headers();
	const host = h.get("host");
	const proto = h.get("x-forwarded-proto") || "http";
	const baseUrl = `${proto}://${host}`;

	const data = await getBlog(baseUrl, params.slug).catch(() => ({ success: false }));
	const post: Blog | undefined = data?.data;

	if (!post) {
		return (
			<main className="min-h-[50vh] grid place-items-center">
				<p className="text-gray-500">Blog not found.</p>
			</main>
		);
	}

	// Turn plain URLs and markdown links into clickable anchors without using innerHTML
	function linkifyText(text: string) {
		const nodes: ReactNode[] = [];
		const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s]+)/g;
		let lastIndex = 0;
		let match: RegExpExecArray | null;
		let key = 0;
		while ((match = regex.exec(text)) !== null) {
			const [full, label, mdUrl, bareUrl] = match;
			if (match.index > lastIndex) {
				nodes.push(text.slice(lastIndex, match.index));
			}
			const url = mdUrl || bareUrl;
			const content = label || url;
			nodes.push(
				<a key={`lnk-${key++}`} href={url!} target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">
					{content}
				</a>
			);
			lastIndex = match.index + full.length;
		}
		if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
		return nodes;
	}

		return (
			<main className="min-h-screen bg-white">
				<Navbar />
				<Container>
				<article className="mx-auto max-w-6xl py-24">
				<header className="mb-6">
						<div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
							<span className="rounded-full bg-teal-600/10 px-3 py-1 font-medium text-teal-700">{post.category}</span>
							{post.readTime && <span>· {post.readTime}</span>}
							{(post.publishedAt || post.createdAt) && (
								<time>
									{new Date(post.publishedAt || post.createdAt!).toLocaleDateString()}
								</time>
							)}
							{post.author && <span className="ml-1">· By {post.author}</span>}
							{typeof post.views === 'number' && <span>· {post.views} views</span>}
							{typeof post.likes === 'number' && <span>· {post.likes} likes</span>}
						</div>
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900">{post.title}</h1>
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					{/* Left: Content */}
					<SlideIn direction="left" duration={1.2} className="lg:col-span-7 order-2 lg:order-1 lg:pr-2">
						{Array.isArray(post.tags) && post.tags.length > 0 && (
							<ul className="mb-6 flex flex-wrap gap-2 text-xs">
								{post.tags.map((t) => (
									<li key={t} className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">#{t}</li>
								))}
							</ul>
						)}

						{/^(?:.|\n)*?\n?#{2,3}\s+/m.test(post.content || "") ? (
							<div className="prose prose-teal max-w-none leading-7 text-gray-800">
								{[...post.content.matchAll(/(^|\n)(#{2,3})\s+([^\n]+)\n?([\s\S]*?)(?=(?:\n#{2,3}\s+)|$)/g)].map((m, idx) => {
									const level = m[2].length; // 2 or 3
									const heading = m[3]?.trim() || "";
									const body = (m[4] || "").trim();
									return (
										<section key={idx} className="mb-8">
											{heading && (
												level === 2 ? (
													<h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">{heading}</h2>
												) : (
													<h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{heading}</h3>
												)
											)}
											{body && <div className="whitespace-pre-wrap">{linkifyText(body)}</div>}
										</section>
									);
								})}
							</div>
						) : (
							<div className="prose prose-teal max-w-none whitespace-pre-wrap leading-7 text-gray-800">{linkifyText(post.content)}</div>
						)}
					</SlideIn>

					{/* Right: Image */}
					{post.image && (
						<SlideIn direction="right" delay={0.12} duration={1.2} className="lg:col-span-5 order-1 lg:order-2">
							<div className="sticky top-20 md:top-24">
								<Image
									src={post.image}
									alt={post.title}
									width={0}
									height={0}
									sizes="(min-width: 1024px) 480px, 100vw"
									className="w-full h-auto rounded-lg"
									priority
								/>
							</div>
						</SlideIn>
					)}
				</div>
			</article>
			</Container>
			<Footer />
		</main>
	);
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
	try {
	const h = await headers();
	const host = h.get("host");
	const proto = h.get("x-forwarded-proto") || "http";
	const baseUrl = `${proto}://${host}`;
	const data = await getBlog(baseUrl, params.slug);
		const post: Blog | undefined = data?.data;
		const title = post?.metaTitle || post?.title || "Blog";
		const description = post?.metaDescription || post?.content?.slice(0, 140) || "Read our latest blog post.";
			const keywords = post?.keywords
				? post.keywords.split(',').map((s) => s.trim()).filter(Boolean)
				: undefined;
		return {
			title,
			description,
				keywords,
				openGraph: { title, description, images: post?.image ? [{ url: post.image }] : undefined },
				twitter: { card: "summary_large_image", title, description },
		} as const;
	} catch {
		return { title: "Blog", description: "Read our latest blog post." } as const;
	}
}


