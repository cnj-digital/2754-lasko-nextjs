import { gql } from "graphql-request";

export const builderQuery = gql`
  query builderQuery($uri: String, $site: String) {
  globalSet(handle: "share_section", site: $site) {
    ... on GlobalSet_ShareSection {
      share_text: text
      share_title: share_title
    }
  }
  videosItems: entries(collection: "videos", site: $site) {
    data {
      id
      title
      ... on Entry_Videos_Video {
        title
        image_placeholder {
          permalink
        }
        video {
          permalink
        }
        youtube_video_embed_url
      }
    }
  }
  eventsItems: entries(collection: "events", site: $site) {
    data {
      id
      title
      url
      permalink
      ... on Entry_Events_Event {
        title
        featured_image {
          permalink
        }
      }
    }
  }
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
            cta {
            title
            link
            asset {
              permalink
            }
          }
          cta_second {
            asset {
              permalink
            }
            title
            link
          }
            id
            display_video
            youtube_video_embed_url
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
        ... on Set_BuilderItems_CortinaForm {
          id
          title
          type
          form_type {
            value
            label
          }
        }
        ... on Set_BuilderItems_MedijskeVsebine {
          title
          type
        }
        ... on Set_BuilderItems_Logos {
          id
          items {
            ... on Set_BuilderItems_Items_Item {
              id
              image {
                permalink
              }
              url
            }
          }
          title
          type
        }
        ... on Set_BuilderItems_Videos {
          id
          title
          type
        }
        ... on Set_BuilderItems_News {
          type
          title
          items {
            title
            url
            permalink
            ... on Entry_Article_Article {
              featured_image {
                permalink
              }
              card_image {
                permalink
              }
            }
          }
        }
         ... on Set_BuilderItems_Events {
           title
           type
         }
          ... on Set_BuilderItems_CortinaResults {
          type
          energy_collected
          title
          description
          title_two
          description_two
          title_three
          description_three
          program {
            ... on Set_BuilderItems_Program_Item {
              description
              title
              title_mobile
            }
          }
          }
          ... on Set_BuilderItems_WallOfFame {
          title
          type
          item {
            ... on Set_BuilderItems_Item_Item {
              id
              image {
                permalink
              }
              title
            }
          }
        }
      }
    }
  }
}
`;
