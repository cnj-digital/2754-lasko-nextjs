"use client";
import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import cx from "classnames";
import Chevron from "../Icons/Chevron";
import ExpandIcon from "../Icons/Expand";
import CloseIcon from "../Icons/Close";
import { Dialog, DialogPanel } from "@headlessui/react";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type CarouselProps = {
  assets: {
    permalink: string;
    alt?: string;
  }[];
};

export default function Carousel({ assets }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
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

  const handleExpand = (permalink: string) => {
    setSelectedImage(permalink);
    setIsOpen(true);
  };

  return (
    <>
      <div className="relative max-w-8xl mx-auto overflow-hidden w-full rounded-3xl my-10 md:my-20">
        <div
          ref={emblaRef}
          className="embla w-full"
          style={{ overflow: "visible" }}
        >
          <div className="embla__container flex items-center w-full ">
            {assets.map((asset, idx) => (
              <div
                key={idx}
                className={cx(
                  "relative embla__slide flex-shrink-0 w-full h-full",
                  currentSlide === idx ? "z-10" : ""
                )}
                style={{ overflow: "visible" }}
              >
                <div className="relative transition-all duration-300 h-full ">
                  <div className="relative md:aspect-video w-full h-full flex items-center justify-center">
                    <Image
                      src={asset.permalink}
                      className="h-full w-auto object-contain rounded-3xl"
                      alt={asset.alt || ""}
                      width={640}
                      height={480}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black p-2 bg-opacity-20 rounded-2xl backdrop-blur-sm"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <Chevron className="size-8 rotate-180 text-white" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black p-2 bg-opacity-20 rounded-2xl backdrop-blur-sm"
          onClick={() => emblaApi?.scrollNext()}
        >
          <Chevron className="size-8 text-white" />
          <span className="sr-only">Next slide</span>
        </button>

        {/* Expand button */}
        <div className="absolute z-10 top-4 right-4 bg-black/20 backdrop-blur-sm rounded-2xl">
          <button
            onClick={() => handleExpand(assets[currentSlide].permalink)}
            className="p-2"
          >
            <ExpandIcon className="w-8 h-8 text-white" />
            <span className="sr-only">Expand image</span>
          </button>
        </div>

        {/* Description */}
        {assets[currentSlide]?.alt && (
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center font-semibold lg:text-lg text-gray-600"
          >
            {assets[currentSlide].alt}
          </motion.p>
        )}
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/80 z-[80]" aria-hidden="true" />

        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-6xl">
            <div className="relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-16 right-0 lg:-right-16 p-2.5 rounded-xl z-10 text-white bg-black bg-opacity-20"
              >
                <CloseIcon className="w-8 h-8" />
              </button>

              <div className="relative rounded-3xl overflow-hidden max-h-[85vh] flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Fullscreen view"
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                  width={640}
                  height={480}
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
