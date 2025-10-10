import { gql } from "graphql-request";

export const eventQuery = gql`
  query EventQuery($uri: String, $site: String) {
    entry(collection: "events", uri: $uri, site: $site) {
      title
      ... on Entry_Events_Event {
        title
        content
        featured_image {
          permalink
        }
      }
    }
  }
`;

