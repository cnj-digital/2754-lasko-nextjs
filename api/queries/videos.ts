import { gql } from "graphql-request";

// Query for all videos
export const videosQuery = gql`
  query videosQuery($site: String) {
    entries(collection: "videos", site: $site) {
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
  }
`;

// Mapper function
export function mapVideos(entries: any[]) {
  if (!entries || !Array.isArray(entries)) return [];
  
  return entries.map((entry: any) => ({
    title: entry.title,
    videoUrl: entry.youtube_video_embed_url || entry.video?.permalink,
    thumbnail: entry.image_placeholder?.permalink,
  }));
}

