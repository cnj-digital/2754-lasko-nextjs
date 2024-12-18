import { gql } from "graphql-request";

export const supportQuery = gql`
  query SupportQuery($uri: String!, $site: String!) {
    entry(uri: $uri, site: $site) {
      title
      ... on Entry_Pages_Support {
        hero_support {
          support_hero_content
          support_hero_ctas {
            ... on Set_HeroSupport_SupportHeroCtas_Cta {
              cta {
                link
                title
              }
            }
          }
          title
        }
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
        support_support_items {
          ... on Set_SupportSupportItems_Cta {
            cta {
              asset {
                permalink
              }
              title
              link
            }
          }
        }
        support_external_links_copy
        support_external_links_title
        support_support_copy
        support_support_title
      }
    }
  }
`;
