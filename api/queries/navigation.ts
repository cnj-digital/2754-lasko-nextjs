import { gql } from "graphql-request";

export const navigationQuery = gql`
  query NavigationQuery($site: String) {
    nav(handle: "main") {
      tree(site: $site) {
        page {
          url
          title
        }
      }
    }
  }
`;

export const footerQuery = gql`
  query NavigationQuery($site: String) {
    nav(handle: "footer") {
      tree(site: $site) {
        children {
          page {
            url
            title
          }
        }
      }
    }
    globalSet(handle: "footer", site: $site) {
      ... on GlobalSet_Footer {
        follow_us
        copyright
      }
    }
  }
`;
