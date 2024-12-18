import { gql } from "graphql-request";

export const historyQuery = gql`
  query HomepageQuery {
    entry(uri: "/zgodovina") {
      title
      ... on Entry_Pages_History {
        story_history_title
        story_history_sections {
          ... on Set_StoryHistorySections_Section {
            copy
            title
            orientation {
              value
            }
            items {
              ... on Set_StoryHistorySections_Items_Item {
                copy
                title
                image {
                  permalink
                }
              }
            }
          }
        }
        story_quote
        story_quote_bottom
        story_timeline_items {
          ... on Set_StoryTimelineItems_Item {
            events {
              ... on Set_StoryTimelineItems_Events_EventItem {
                description
                image {
                  permalink
                }
                title
                cta {
                  link
                  title
                }
              }
            }
            year
          }
        }
        story_slider_title
        story_slider_items {
          ... on Set_StorySliderItems_Item {
            image {
              permalink
            }
            description
          }
        }
        story_video_grid_title
        story_video_grid_items {
          ... on Set_StoryVideoGridItems_Item {
            title
            video
          }
        }
        story_quality_title
        story_quality_sections {
          ... on Set_StoryQualitySections_Section {
            copy
            items {
              ... on Set_StoryQualitySections_Items_Item {
                copy
                image {
                  permalink
                }
                title
              }
            }
            title
            orientation {
              value
            }
          }
        }
        story_how_title
        story_how_copy
        story_how_slides {
          ... on Set_StoryHowSlides_Slide {
            numbers
            copy
            title
          }
        }
        promos_items {
          ... on Entry_Promos_Promo {
            description
            asset {
              permalink
            }
            title
            cta {
              link
              title
            }
          }
        }
        story_hero {
          title
          story_hero_ctas {
            ... on Set_StoryHero_StoryHeroCtas_Cta {
              cta {
                link
                title
              }
            }
          }
          story_hero_content
        }
      }
    }
  }
`;
