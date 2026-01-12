import { gql } from "graphql-request";

export const articleQuery = gql`
  query ArticleQuery($uri: String, $site: String) {
    globalSet(handle: "share_section", site: $site) {
      ... on GlobalSet_ShareSection {
        share_text: text
        share_title: share_title
      }
    }
    entry(collection: "article", uri: $uri) {
      title
      ... on Entry_Article_Article {
        builder_items {
          ... on Set_BuilderItems_ContentSet {
            type
            title
            variant {
              value
            }
            asset {
              permalink
            }
            content_field {
              ... on Set_BuilderItems_ContentField_CtaSet {
                id
                type
                cta {
                  asset {
                    permalink
                  }
                  link
                  title
                }
              }
                ... on Set_BuilderItems_ContentField_Image {
              id
              type
              image {
                permalink
              }
            }
              ... on BardText {
                text
                type
              }
            }
            cta {
              title
              link
              asset {
                permalink
              }
            }
          }
          ... on Set_BuilderItems_Carousel {
            type
            assets {
              permalink
            }
          }
          ... on Set_BuilderItems_Share {
            type
          }
          ... on Set_BuilderItems_Quote {
            type
            quote_content_field
          }
          ... on Set_BuilderItems_Video {
            mp4 {
              permalink
            }
            youtube
            type
          }
        }
        featured_image {
          permalink
        }
        date
      }
      ... on NavEntryPage_Footer_Article_Article {
        id
      }
    }
  }
`;

export const articlesQuery = gql`
  query ArticlesQuery($site: String) {
    entries(collection: "article", sort: "date desc", site: $site) {
      data {
        title
        slug
        ... on Entry_Article_Article {
          date
          featured_image {
            permalink
          }
          card_image {
            permalink
          }
          url
        }
      }
    }
  }
`;

export function mapArticle(data: any) {
  return {
    title: data.title,
    image: data.featured_image?.permalink,
    date: data.date,
    items: data.builder_items || [], // Handle null builder_items
  };
}

export function mapArticles(data: any) {
  return data.map((article: any) => {
    return {
      title: article.title,
      slug: article.slug,
      url: article.url,
      date: article.date,
      image: article.card_image
        ? article.card_image.permalink
        : article.featured_image?.permalink,
    };
  });
}
