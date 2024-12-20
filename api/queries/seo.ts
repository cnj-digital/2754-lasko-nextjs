import { gql } from "graphql-request";

export const seoQuery = gql`
  query SeoQuery($uri: String, $site: String) {
    entry(uri: $uri, site: $site) {
      seotamic_meta {
        canonical
        description
        related
        robots
        title
      }
      seotamic_social {
        description
        image
        open_graph
        site_name
        title
        twitter
      }
    }
  }
`;
