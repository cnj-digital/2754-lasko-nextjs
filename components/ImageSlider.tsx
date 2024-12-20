"use client";
import { useCallback, useEffect, useState } from "react";
import Container from "./Container";
import { motion } from "motion/react";
import cx from "classnames";
import Chevron from "./Icons/Chevron";
import { generateAnchorLink } from "@/helpers/general";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type ImageSliderProps = {
  title: string;
  images: {
    url: string;
    description: string;
  }[];
};

export default function ImageSlider({ title, images }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="max-w-8xl mx-auto overflow-hidden w-full">
      <Container>
        <h2
          id={generateAnchorLink(title)}
          className="text-[32px] lg:text-[52px]  font-black text-green-800 font-neutraface"
        >
          {title}
        </h2>
      </Container>
      <div
        ref={emblaRef}
        className="embla w-full mt-20"
        style={{ overflow: "visible" }}
      >
        <div className="embla__container flex items-center w-full">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={cx(
                "relative embla__slide flex-shrink-0 w-[80%] md:w-auto",
                currentSlide === idx ? "z-10" : ""
              )}
              style={{ overflow: "visible" }}
            >
              <div
                className={cx(
                  "relative  transition-all duration-300  ",
                  currentSlide - idx === 2
                    ? "origin-right "
                    : currentSlide - idx === -2
                    ? "origin-left "
                    : "origin-center ",
                  currentSlide === idx
                    ? "scale-110 lg:scale-125 z-10"
                    : Math.abs(currentSlide - idx) === 1
                    ? "scale-95 lg:scale-110 "
                    : Math.abs(currentSlide - idx) === 2
                    ? "scale-90 lg:scale-110 "
                    : "scale-90 lg:xscale-110"
                )}
              >
                <div className="relative aspect-[2/1]">
                  <img src={image.url} className="w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Container className="mt-16 flex flex-wrap gap-4 lg:flex-nowrap justify-center items-start">
        <motion.p
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-gray-600 max-w-md ml-auto lg:pl-28"
        >
          {images[currentSlide].description}
        </motion.p>
        <div className="flex gap-4 ml-auto">
          <button
            className=" bg-black p-2 bg-opacity-20 rounded-2xl backdrop-blur-sm"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <Chevron className="size-8 rotate-180 text-white" />
          </button>
          <button
            className=" bg-black p-2 bg-opacity-20 rounded-2xl backdrop-blur-sm"
            onClick={() => emblaApi?.scrollNext()}
          >
            <Chevron className="size-8 text-white" />
          </button>
        </div>
      </Container>
    </div>
  );
}
