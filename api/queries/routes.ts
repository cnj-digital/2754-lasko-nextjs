import { gql } from "graphql-request";

export const routesQuery = gql`
  query RoutesQuery($site: String) {
    entries(collection: "pages", site: $site) {
      data {
        uri
        url
        blueprint
      }
    }
  }
`;

export const pageQuery = gql`
  query pageQuery($uri: String, $site: String) {
    entry(uri: $uri, site: $site) {
      blueprint
    }
  }
`;
