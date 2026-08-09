import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export type PostCardData = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  coverImage: {
    alt: string;
    asset: { _ref: string; _type: "reference" };
    hotspot?: unknown;
    crop?: unknown;
    metadata?: { lqip?: string; dimensions?: { width: number; height: number } };
  };
  category: { _id: string; title: string; slug: string } | null;
};

export function PostCard({ post }: { post: PostCardData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={urlFor(post.coverImage).width(600).height(450).fit("crop").url()}
          alt={post.coverImage.alt || post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          placeholder={post.coverImage.metadata?.lqip ? "blur" : "empty"}
          blurDataURL={post.coverImage.metadata?.lqip}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        {post.category && (
          <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-3">
            {post.category.title}
          </p>
        )}
        <h3 className="font-georgia italic font-bold text-xl text-charcoal leading-snug mb-2 group-hover:text-sage-teal transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-stone-gray leading-relaxed mb-4 flex-1">
          {post.excerpt}
        </p>
        <time
          dateTime={post.publishedAt}
          className="text-xs text-stone-gray"
        >
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
