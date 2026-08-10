import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PostCard, type PostCardData } from "./components/PostCard";

export const metadata: Metadata = {
  title: "Blog | Anxiety, People-Pleasing & Boundaries",
  description:
    "Insights on anxiety, people-pleasing, and building authentic relationships from Brigit Jacoby, LCSW — a therapist for high-achieving adults, teens, and families in Los Angeles.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brigitjacoby.com/blog",
    siteName: "Brigit Jacoby, LCSW",
    title: "Blog | Anxiety, People-Pleasing & Boundaries",
    description:
      "Insights on anxiety, people-pleasing, and building authentic relationships from Brigit Jacoby, LCSW.",
    images: ["/og-image.jpg"],
  },
};

const options = { next: { revalidate: 60 } };

export default async function BlogIndex() {
  const posts = await client.fetch<PostCardData[]>(POSTS_QUERY, {}, options);

  return (
    <main>
      <section className="bg-warm-cream py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-4">
            The Blog
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold italic text-charcoal leading-tight mb-4">
            Thoughts on anxiety, people-pleasing, and being seen.
          </h1>
          <p className="text-base sm:text-lg text-stone-gray leading-relaxed">
            Practical, honest writing on anxiety and people-pleasing — for
            high-achieving adults, teens, and the families supporting them.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-stone-gray">
              New posts are coming soon.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
