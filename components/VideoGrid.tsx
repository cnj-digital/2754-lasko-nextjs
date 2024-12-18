"use client";

import React, { useState, useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import CloseIcon from "./Icons/Close";
import Container from "./Container";
import PlayIcon from "./Icons/Play";
import ExpandIcon from "./Icons/Expand";

type Video = {
  title: string;
  videoUrl: string;
  thumbnail?: string;
};

interface VideoGridProps {
  title?: string;
  videos: Video[];
}

const getYoutubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
};

export default function VideoGrid({ title, videos }: VideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const previewRefs = useRef<(HTMLVideoElement | null)[]>([]);

  function videoType(videoUrl: string) {
    return videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")
      ? "youtube"
      : "local";
  }

  const renderThumbnail = (video: Video, index: number) => {
    if (video.thumbnail) {
      return (
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      );
    }

    if (videoType(video.videoUrl) === "youtube") {
      const videoId = getYoutubeEmbedUrl(video.videoUrl).split("/").pop();
      return (
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      );
    }

    // For local videos without thumbnail, show a preview
    return (
      <video
        ref={(el) => {
          previewRefs.current[index] = el;
        }}
        src={video.videoUrl}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => {
          e.currentTarget.pause();
          e.currentTarget.currentTime = 0;
        }}
      />
    );
  };

  const renderVideoPlayer = (video: Video) => {
    if (videoType(video.videoUrl) === "youtube") {
      return (
        <iframe
          src={getYoutubeEmbedUrl(video.videoUrl)}
          className="w-full h-full absolute top-0 left-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    return (
      <video controls autoPlay className="w-full h-full" src={video.videoUrl}>
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <Container className="w-full py-20">
      {title && (
        <h2 className="text-[32px] lg:text-[52px] font-black text-green-800 font-neutraface">
          {title}
        </h2>
      )}

      <div className="flex overflow-auto md:grid  md:grid-cols-2 lg:grid-cols-3 gap-6 relative mt-10 -mx-8 px-8 lg:px-0 lg:mx-0">
        {videos.map((video, i) => (
          <div key={i} className=" relative w-4/5 lg:w-full flex-shrink-0">
            <div
              className="aspect-square lg:aspect-[1.3] bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {renderThumbnail(video, i)}

              <div className="absolute inset-0 flex items-center justify-center">
                <PlayIcon className="w-16 h-16 text-white group-hover:scale-110 transform transition-transform" />
              </div>
              <div className="absolute z-10 top-4 right-4  bg-black/20 backdrop-blur-sm rounded-3xl">
                <ExpandIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-black text-2xl mt-6 font-bold">{video.title}</p>
          </div>
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
              {/* Close button */}
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
    </Container>
  );
}
