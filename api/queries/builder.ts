import { gql } from "graphql-request";

export const builderQuery = gql`
  query builderQuery($uri: String, $site: String) {
    entry(uri: $uri, site: $site) {
      blueprint
      title
      ... on Entry_Pages_Builder {
        builder_items {
          ... on Set_BuilderItems_ContentSet {
            asset {
              permalink
            }
            title
            type
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
              ... on BardText {
                text
                type
              }
            }
            variant {
              value
            }
          }
          ... on Set_BuilderItems_Quote {
            type
            quote_content_field
          }
          ... on Set_BuilderItems_Carousel {
            assets {
              permalink
            }
            type
          }
          ... on Set_BuilderItems_Share {
            type
          }
        }
      }
    }
  }
`;
