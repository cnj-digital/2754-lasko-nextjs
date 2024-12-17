import { gql } from "graphql-request";

export const homepageQuery = gql`
  query HomepageQuery {
    entry(slug: "home") {
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
      }
    }
  }
`;
