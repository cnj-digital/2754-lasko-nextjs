"use client";
import { useState } from "react";
import Container from "./Container";
import "keen-slider/keen-slider.min.css";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import { motion } from "motion/react";
import cx from "classnames";
import ArrowIcon from "./Icons/Arrow";
import Chevron from "./Icons/Chevron";

type ImageSliderProps = {
  title: string;
  images: {
    url: string;
    description: string;
  }[];
};

export default function ImageSlider({ title, images }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const options: KeenSliderOptions = {
    slides: { origin: "center", perView: 3.2, spacing: 15 },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  };
  const [sliderRef, instanceRef] = useKeenSlider(options);

  return (
    <div className="max-w-8xl mx-auto overflow-hidden">
      <Container>
        <h2 className="text-4xl font-black text-green-800 font-neutraface">
          {title}
        </h2>
      </Container>
      <div
        ref={sliderRef}
        className="keen-slider mt-20"
        style={{ overflow: "visible" }}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className={cx(
              "relative keen-slider__slide",
              currentSlide === idx ? "z-10" : ""
            )}
            style={{ overflow: "visible" }}
          >
            <div
              className={cx(
                "relative  transition-all duration-300 ",
                currentSlide - idx === 2
                  ? "origin-right "
                  : currentSlide - idx === -2
                  ? "origin-left "
                  : "origin-center ",
                currentSlide === idx
                  ? "scale-125 z-10"
                  : Math.abs(currentSlide - idx) === 1
                  ? "scale-110 "
                  : Math.abs(currentSlide - idx) === 2
                  ? "scale-110 "
                  : "scale-110"
              )}
            >
              <div className="relative aspect-[2/1]">
                <img src={image.url} className="w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Container className="mt-16 flex justify-center items-start">
        <motion.p
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 max-w-md ml-auto pl-28"
        >
          {images[currentSlide].description}
        </motion.p>
        <div className="flex gap-4 ml-auto">
          <button
            className=" bg-black p-2 bg-opacity-20 rounded-2xl backdrop-blur-sm"
            onClick={() => instanceRef.current?.prev()}
          >
            <Chevron className="size-8 rotate-180 text-white" />
          </button>
          <button
            className=" bg-black p-2 bg-opacity-20 rounded-2xl backdrop-blur-sm"
            onClick={() => instanceRef.current?.next()}
          >
            <Chevron className="size-8 text-white" />
          </button>
        </div>
      </Container>
    </div>
  );
}
