"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import CloseIcon from "./Icons/Close";
import Container from "./Container";

type Video = {
  title: string;
  videoUrl: string;
};

interface VideoGridProps {
  title?: string;
  videos: Video[];
}

export default function VideoGrid({ title, videos }: VideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <Container className="w-full py-20">
      {title && (
        <h2 className="text-4xl font-black text-green-800 font-neutraface">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative mt-10">
        {videos.map((video, i) => (
          <div
            key={i}
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            {/* Thumbnail */}
            {/* <img
              src={video.thumbnail || "/api/placeholder/400/225"}
              alt={video.title}
              className="w-full h-full object-cover"
            /> */}

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-green-800 border-b-8 border-b-transparent ml-1" />
              </div>
            </div>

            {/* Title and year */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-medium">{video.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <Dialog
        open={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-200 transition-colors"
              >
                <CloseIcon className="w-8 h-8" />
              </button>

              {/* Video player */}
              <div className="aspect-video relative">
                {selectedVideo && (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full"
                    src={selectedVideo.videoUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              {/* Video info */}
              {selectedVideo && (
                <div className="p-4 bg-black">
                  <Dialog.Title className="text-xl font-medium text-white">
                    {selectedVideo.title}
                  </Dialog.Title>
                </div>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Container>
  );
}
