import { gql } from "graphql-request";

// Query for a single media item (by slug for page routing)
export const mediaItemQuery = gql`
  query mediaItemQuery($slug: String, $site: String) {
    entry(slug: $slug, site: $site, collection: "medijske_vsebine") {
      id
      title
      slug
      permalink
      date
      blueprint
      ... on Entry_MedijskeVsebine_MedijskeVsebine {
        title
        content
        featured_image {
          permalink
        }
        kategorija {
          id
          title
          slug
          permalink
        }
      }
    }
  }
`;

// Query for all media items
export const mediaItemsQuery = gql`
  query mediaItemsQuery($site: String) {
    entries(collection: "medijske_vsebine", site: $site) {
      data {
        id
        title
        slug
        permalink
        ... on Entry_MedijskeVsebine_MedijskeVsebine {
          title
          content
          kategorija {
            id
            title
            slug
            permalink
          }
        }
      }
    }
  }
`;

// Query for media categories
export const mediaCategoriesQuery = gql`
  query mediaCategoriesQuery($site: String) {
    entries(collection: "medijske_vsebine_kategorije", site: $site) {
      data {
        id
        title
        slug
        permalink
        ... on Entry_MedijskeVsebineKategorije_MedijskeVsebineKategorije {
          title
        }
      }
    }
  }
`;

// Query for media items by category
export const mediaItemsByCategoryQuery = gql`
  query mediaItemsByCategoryQuery($categorySlug: String, $site: String) {
    entries(
      collection: "medijske_vsebine"
      site: $site
      filter: { kategorija: { slug: { is: $categorySlug } } }
    ) {
      data {
        id
        title
        slug
        permalink
        ... on Entry_MedijskeVsebine_MedijskeVsebine {
          title
          content
          kategorija {
            id
            title
            slug
            permalink
          }
        }
      }
    }
  }
`;

// Mapper functions
export function mapMediaItem(entry: any) { 
  if (!entry) return null;
  
  return {
    id: entry.id,
    title: entry.title,
    slug: entry.slug,
    permalink: entry.permalink,
    date: entry.date,
    content: entry.content,
    featured_image: entry.featured_image,
    category: entry.kategorija ? {
      id: entry.kategorija.id,
      title: entry.kategorija.title,
      slug: entry.kategorija.slug,
      permalink: entry.kategorija.permalink,
    } : null,
  };
}

export function mapMediaItems(entries: any[]) {
  if (!entries || !Array.isArray(entries)) return [];
  return entries.map(mapMediaItem);
}

export function mapMediaCategories(entries: any[]) {
  if (!entries || !Array.isArray(entries)) return [];
  
  return entries.map((entry: any) => ({
    id: entry.id,
    title: entry.title,
    slug: entry.slug,
    permalink: entry.permalink,
  }));
}

