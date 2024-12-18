import { gql } from "graphql-request";

export const articleQuery = gql`
  query ArticleQuery($slug: String) {
    entry(collection: "article", slug: $slug) {
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
              ... on Set_BuilderItems_ContentField_Cta {
                id
                cta {
                  asset {
                    permalink
                  }
                  link
                  title
                }
              }
              ... on BardText {
                text
                type
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
  query ArticlesQuery {
    entries(collection: "article", sort: "date desc") {
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
    items: data.builder_items,
  };
}

export function mapArticles(data: any) {
  return data.map((article: any) => {
    return {
      title: article.title,
      slug: article.slug,
      date: article.date,
      image: article.card_image
        ? article.card_image.permalink
        : article.featured_image?.permalink,
    };
  });
}
