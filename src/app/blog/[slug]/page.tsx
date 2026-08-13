import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  POST_QUERY,
  POST_SLUGS_QUERY,
  RELATED_POSTS_QUERY,
} from "@/sanity/lib/queries";
import { PostBody } from "../components/PostBody";
import { PostCard, type PostCardData } from "../components/PostCard";

type PostData = PostCardData & {
  seo?: { title?: string; description?: string } | null;
  body: Parameters<typeof PostBody>[0]["value"];
};

type Props = {
  params: Promise<{ slug: string }>;
};

const options = { next: { revalidate: 60 } };

async function getPost(slug: string) {
  return client.fetch<PostData | null>(POST_QUERY, { slug }, options);
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    POST_SLUGS_QUERY,
    {},
    { cache: "no-store" }
  );
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.excerpt;
  const ogImage = urlFor(post.coverImage).width(1200).height(630).fit("crop").url();

  return {
    title,
    description,
    alternates: {
      canonical: `https://brigitjacoby.com/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://brigitjacoby.com/blog/${post.slug}`,
      siteName: "Brigit Jacoby, LCSW",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = post.category
    ? await client.fetch<PostCardData[]>(
        RELATED_POSTS_QUERY,
        { categoryId: post.category._id, slug: post.slug },
        options
      )
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: urlFor(post.coverImage).width(1200).url(),
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Brigit Jacoby",
      jobTitle: "Licensed Clinical Social Worker",
    },
    publisher: {
      "@type": "Organization",
      name: "Brigit Jacoby, LCSW",
    },
    mainEntityOfPage: `https://brigitjacoby.com/blog/${post.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-warm-cream pt-10 sm:pt-16 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {post.category && (
            <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-4">
              {post.category.title}
            </p>
          )}
          <h1 className="text-3xl sm:text-5xl font-bold italic text-charcoal leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-stone-gray">
            Brigit Jacoby, LCSW ·{" "}
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-10">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={urlFor(post.coverImage).width(1200).height(675).fit("crop").url()}
            alt={post.coverImage.alt || post.title}
            fill
            priority
            className="object-cover"
            placeholder={post.coverImage.metadata?.lqip ? "blur" : "empty"}
            blurDataURL={post.coverImage.metadata?.lqip}
          />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
        <PostBody value={post.body} />
      </article>

      {related.length > 0 && (
        <section className="bg-soft-sage py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold italic text-charcoal mb-8 text-center">
              More from the blog
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((relatedPost) => (
                <PostCard key={relatedPost._id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-deep-teal py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold italic text-white mb-4">
            Ready to talk?
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            I offer a free 20-minute consultation to see if we&apos;re the
            right fit.
          </p>
          <Link href="/contact" className="btn-white">
            Book a Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
