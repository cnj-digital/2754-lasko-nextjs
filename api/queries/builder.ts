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
          ... on Set_BuilderItems_Video {
            mp4 {
              permalink
            }
            youtube
            type
          }
          ... on Set_BuilderItems_Form {
            type
            form {
              ... on Entry_Form_Form {
                content
                id
                title
                items {
                  ... on Set_Items_TextInput {
                    label
                    type
                    variant_input {
                      value
                    }
                    required
                  }
                  ... on Set_Items_TextArea {
                    required
                    label
                    type
                  }
                  ... on Set_Items_Checkbox {
                    label
                    required
                    type
                    title
                  }
                  ... on Set_Items_SingleChoice {
                    label
                    variant {
                      value
                    }
                    required
                    type
                    options
                  }
                  ... on Set_Items_MultipleChoice {
                    options
                    label
                    required
                    type
                  }
                  ... on Set_Items_File {
                    content
                    label
                    type
                  }
                }
                submit_button_label
                disclaimer
                required_error
                success {
                  title
                  content
                }
              }
            }
          }
        }
      }
    }
  }
`;
