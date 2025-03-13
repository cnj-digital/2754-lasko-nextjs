import { gql } from "graphql-request";

export const translationsQuery = gql`
  query builderQuery($site: String) {
    globalSet(handle: "translation", site: $site) {
      ... on GlobalSet_Translation {
        cookie_title
        cookie_description
        analytical_title
        analytical_description
        always_active
        accept_selected
        accept_only_essential
        accept_all
        essential_description
        essential_title
        marketing_description
        marketing_title
        show_settings
      }
    }
  }
`;
