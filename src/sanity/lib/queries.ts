import { defineQuery } from "next-sanity";

const postCardFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage {
    alt,
    hotspot,
    crop,
    asset,
    "metadata": asset->metadata { lqip, dimensions }
  },
  category-> { _id, title, "slug": slug.current }
`;

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    ${postCardFields}
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    ${postCardFields},
    seo,
    body[] {
      ...,
      _type == "image" => {
        ...,
        "metadata": asset->metadata { lqip, dimensions }
      }
    }
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] { "slug": slug.current }
`);

export const RELATED_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && category._ref == $categoryId && slug.current != $slug]
    | order(publishedAt desc) [0...3] {
      ${postCardFields}
    }
`);

export const SITEMAP_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`);
