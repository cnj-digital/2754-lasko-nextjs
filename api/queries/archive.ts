import { gql } from "graphql-request";

export const archiveQuery = gql`
  query ArchiveQuery($uri: String, $site: String) {
    entry(uri: $uri, site: $site) {
      title
      ... on Entry_Pages_Archive {
        promos_items {
          ... on Entry_Promos_Promo {
            description
            title
            cta {
              title
              link
            }
            asset {
              permalink
            }
          }
        }
      }
    }
  }
`;
