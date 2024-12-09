import React from "react";
import ButtonSolid from "./Buttons/Solid";

interface HeroImageProps {
  title: string;
  copy?: string;
  buttons?: {
    title: string;
    url: string;
  }[];
  image?: string;
}

export default function HeroImage({
  title,
  copy,
  buttons,
  image,
}: HeroImageProps) {
  return (
    <div
      className="relative w-full overflow-hidden bg-green-700 bg-blend-color-burn rounded-b-3xl"
      style={{ backgroundImage: "url('/bg-green.png')" }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:pt-44">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white z-10 lg:pb-16">
            <h1 className="text-3xl md:text-[52px] leading-tight  font-neutraface  font-bold mb-6">
              {title}
            </h1>

            {/* Social Proof Section */}
            {copy && (
              <div className="space-y-4 mb-8">
                <div
                  dangerouslySetInnerHTML={{ __html: copy }}
                  className="font-semibold"
                ></div>
              </div>
            )}

            {/* Buttons */}
            {buttons && (
              <div className="flex flex-wrap gap-4 mb-16">
                {buttons.map((button, i) => (
                  <ButtonSolid url={button.url} title={button.title} key={i} />
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <img src={image} className="w-full object-cover " />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
