import { gql } from "graphql-request";

export const page404Query = gql`
  query builderQuery($site: String) {
    globalSet(handle: "not_found_page", site: $site) {
      ... on GlobalSet_NotFoundPage {
        cta {
          link
          title
        }
        title_text
      }
    }
  }
`;
