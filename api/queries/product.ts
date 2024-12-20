import { gql } from "graphql-request";

export const productQuery = gql`
  query ProductQuery($uri: String, $site: String) {
    entry(uri: $uri, site: $site) {
      title
      ... on Entry_Pages_Product {
        product_items {
          ... on Entry_Product_Product {
            product_background {
              permalink
            }
            product_content
            product_image {
              permalink
            }
            product_table
            title
            cta {
              title
              link
            }
            background_mobile {
              permalink
            }
          }
        }
        promos_items {
          ... on Entry_Promos_Promo {
            description
            title
            asset {
              permalink
            }
            cta {
              link
              title
            }
          }
        }
      }
    }
  }
`;
