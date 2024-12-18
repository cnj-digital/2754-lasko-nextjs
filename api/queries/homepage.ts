import { gql } from "graphql-request";

export const homepageQuery = gql`
  query HomepageQuery($uri: String, $site: String) {
    entry(uri: $uri, site: $site) {
      title
      ... on Entry_Pages_Page {
        hero {
          title
          cta {
            title
            link
          }
          background {
            is_video
            permalink
          }
        }
        promos_items {
          ... on Entry_Promos_Promo {
            description
            title
            cta {
              link
              title
            }
            asset {
              permalink
            }
          }
        }
        external_links_items {
          ... on Set_ExternalLinksItems_Cta {
            type
            cta {
              asset {
                permalink
              }
              link
              title
            }
          }
        }
      }
    }
  }
`;
