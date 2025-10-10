"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import CardVideo from "@/components/Cards/Video";
import CloseIcon from "@/components/Icons/Close";

type Video = {
  id: string;
  title: string;
  video?: {
    permalink: string;
  };
  youtube_video_embed_url?: string;
  image_placeholder?: {
    permalink: string;
  };
};

type VideosProps = {
  title?: string;
  videosItems?: {
    data?: Video[];
  };
};

const getYoutubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
};

export default function Videos({ title, videosItems }: VideosProps) {
  const videos = videosItems?.data || [];
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  
  if (videos.length === 0) return null;

  const getVideoUrl = (video: Video) => {
    return video.youtube_video_embed_url || video.video?.permalink || "";
  };

  const isYoutube = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const renderVideoPlayer = (video: Video) => {
    const videoUrl = getVideoUrl(video);
    
    if (isYoutube(videoUrl)) {
      return (
        <iframe
          src={getYoutubeEmbedUrl(videoUrl)}
          className="w-full h-full absolute top-0 left-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    return (
      <video controls autoPlay className="w-full h-full" src={videoUrl}>
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <section className="max-w-8xl w-full mx-auto my-20 md:my-40">
      {title && (
        <h2 className="text-green-800 font-black text-[32px] md:text-[48px] leading-tight font-neutraface mb-10">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <CardVideo
            key={video.id}
            title={video.title}
            image={video.image_placeholder?.permalink || "/placeholders/news.png"}
            onClick={() => setSelectedVideo(video)}
          />
        ))}
      </div>

      <Dialog
        open={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-4xl">
            <div className="relative">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-16 right-0 lg:-right-16 p-2.5 rounded-xl z-10 text-white bg-black bg-opacity-20"
              >
                <CloseIcon className="w-8 h-8" />
              </button>

              <div className="aspect-video relative rounded-3xl overflow-hidden">
                {selectedVideo && renderVideoPlayer(selectedVideo)}
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}


