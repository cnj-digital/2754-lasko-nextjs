"use client";

import ImageSlider from "../ImageSlider";

type CarouselProps = {
  title?: string | null;
  assets: {
    permalink: string;
  }[];
};

export default function Carousel({ title, assets }: CarouselProps) {
  if (!assets || assets.length === 0) return null;

  const images = assets.map((asset) => ({
    url: asset.permalink,
    description: "",
  }));

  return (
    <div className="builder-carousel max-w-5xl mx-auto w-full">
      <ImageSlider title={title ?? ""} images={images} />
    </div>
  );
}


