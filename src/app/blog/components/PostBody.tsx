import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

type ImageBlock = {
  _key: string;
  alt?: string;
  caption?: string;
  asset: { _ref: string; _type: "reference" };
  metadata?: { lqip?: string; dimensions?: { width: number; height: number } };
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-stone-gray leading-relaxed mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-georgia italic font-bold text-2xl sm:text-3xl text-charcoal mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-georgia italic font-bold text-xl sm:text-2xl text-charcoal mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-sage-teal bg-soft-sage rounded-r-xl px-6 py-4 my-6 text-charcoal/90 italic leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 space-y-2 text-stone-gray mb-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-2 text-stone-gray mb-5">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-charcoal font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href: string = value?.href || "#";
      const isExternal = /^https?:\/\//.test(href) && !href.includes("brigitjacoby.com");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-sage-teal underline underline-offset-2 hover:text-deep-teal transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: ImageBlock }) => {
      if (!value?.asset) return null;
      const dims = value.metadata?.dimensions;
      const width = dims?.width ?? 1200;
      const height = dims?.height ?? Math.round(width * 0.66);
      return (
        <figure className="my-8">
          <div className="relative rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt || ""}
              width={width}
              height={height}
              className="w-full h-auto"
              placeholder={value.metadata?.lqip ? "blur" : "empty"}
              blurDataURL={value.metadata?.lqip}
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-stone-gray text-center mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PostBody({ value }: { value: Parameters<typeof PortableText>[0]["value"] }) {
  return <PortableText value={value} components={components} />;
}
