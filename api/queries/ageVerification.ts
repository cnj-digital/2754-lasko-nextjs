import { gql } from "graphql-request";

export const ageVerificationQuery = gql`
  query builderQuery($site: String) {
    globalSet(handle: "age_verification", site: $site) {
      ... on GlobalSet_AgeVerification {
        confirm
        decline
        age_title
      }
    }
  }
`;
