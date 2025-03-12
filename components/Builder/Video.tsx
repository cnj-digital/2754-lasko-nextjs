"use client";
import React, { useState, useRef } from "react";

import PlayIcon from "../Icons/Play";
import ExpandIcon from "../Icons/Expand";
import CloseIcon from "../Icons/Close";
import { Dialog, DialogPanel } from "@headlessui/react";

interface VideoPlayerProps {
  thumbnail?: string;
  youtube?: string;
  mp4?: string;
}

const getYoutubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
};

export default function VideoPlayer({
  mp4,
  youtube,
  thumbnail,
}: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = (mp4 || youtube) ?? "";
  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  const renderThumbnail = () => {
    if (thumbnail) {
      return (
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      );
    }

    if (isYouTube) {
      const videoId = getYoutubeEmbedUrl(videoUrl).split("/").pop();
      return (
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      );
    }

    return (
      <video
        ref={videoRef}
        src={videoUrl}
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

  const renderVideoPlayer = () => {
    if (isYouTube) {
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
    <div className="w-full my-20">
      <div
        className="aspect-video bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {renderThumbnail()}

        <div className="absolute inset-0 flex items-center justify-center">
          <PlayIcon className="w-16 h-16 text-white group-hover:scale-110 transform transition-transform" />
        </div>

        <div className="absolute z-10 top-4 right-4 bg-black/20 backdrop-blur-sm rounded-3xl">
          <ExpandIcon className="w-8 h-8 text-white" />
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/80 z-[80]" aria-hidden="true" />

        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-4xl">
            <div className="relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-16 right-0 lg:-right-16 p-2.5 rounded-xl z-10 text-white bg-black bg-opacity-20"
              >
                <CloseIcon className="w-8 h-8" />
              </button>

              <div className="aspect-video relative rounded-3xl overflow-hidden">
                {renderVideoPlayer()}
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
