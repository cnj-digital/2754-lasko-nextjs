"use client";
import Container from "./Container";
import Chevron from "./Icons/Chevron";
import { generateAnchorLink } from "@/helpers/general";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import cx from "classnames";
import { EmblaCarouselType } from "embla-carousel";
import Fade from "embla-carousel-fade";

type InfoSliderProps = {
  title: string;
  copy: string;
  slides: {
    title: string;
    copy: string;
    numbers: string[];
  }[];
};

const positions = [
  {
    title: "1",
    position: { left: 6, top: 2 },
  },
  {
    title: "2",
    position: { left: 9, top: 13 },
  },
  {
    title: "3",
    position: { left: 12, top: 37 },
  },
  {
    title: "4",
    position: { left: 26, top: 20 },
  },
  {
    title: "5",
    position: { left: 31, top: 4 },
  },
  {
    title: "6",
    position: { left: 42, top: 15 },
  },
  {
    title: "7",
    position: { left: 38, top: 33 },
  },
  {
    title: "8",
    position: { left: 55, top: -2 },
  },
  {
    title: "9",
    position: { left: 56, top: 8 },
  },
  {
    title: "10",
    position: { left: 70, top: 4 },
  },
  {
    title: "11",
    position: { left: 75.5, top: 16 },
  },
  {
    title: "12",
    position: { left: 88, top: 17 },
  },
  {
    title: "13",
    position: { left: 87, top: 9 },
  },
  {
    title: "14",
    position: { left: 96, top: 27 },
  },
  {
    title: "15",
    position: { left: 75, top: 41 },
  },
  {
    title: "16",
    position: { left: 69, top: 32 },
  },
  {
    title: "17",
    position: { left: 49, top: 35 },
  },
  {
    title: "18",
    position: { left: 64, top: 67 },
  },
  {
    title: "19",
    position: { left: 42, top: 54 },
  },
  {
    title: "20",
    variants: [
      { left: 40, top: 44.5 },
      { left: 42, top: 61 },
    ],
  },
  {
    title: "21",
    variants: [
      { left: 34, top: 55 },
      { left: 48, top: 75 },
    ],
  },
  {
    title: "22",
    variants: [
      { left: 28, top: 40 },
      { left: 40.7, top: 70.5 },
    ],
  },
  {
    title: "23",
    variants: [
      { left: 28, top: 55 },
      { left: 33, top: 70.5 },
    ],
  },
  {
    title: "24",
    position: { left: 20, top: 42.5 },
  },
  {
    title: "25",
    position: { left: 24, top: 58 },
  },
  {
    title: "26",
    variants: [
      { left: 17, top: 56 },
      { left: 22.5, top: 70 },
      { left: 26, top: 77.5 },
    ],
  },
  {
    title: "27",
    position: { left: 29, top: 73 },
  },
];

export default function InfoSlider({ title, copy, slides }: InfoSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Fade()]);

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

  function isSelected(index: string) {
    return slides[currentSlide]?.numbers?.includes(index);
  }

  return (
    <Container className="py-20 overflow-hidden">
      <h2
        id={generateAnchorLink(title)}
        className=" leading-tight text-[40px] text-green-800 lg:text-[52px] font-neutraface"
      >
        {title}
      </h2>
      <p className="text-[21px] mt-6 lg:mt-10 text-black lg:text-[32px] leading-[1.4] font-bold">
        {copy}
      </p>
      <div className="relative lg:p-10 mt-6 lg:mt-10 w-full bg-green-700 rounded-3xl flex items-center justify-center overflow-hidden ">
        <div className="relative">
          <img
            src="/production.png"
            alt="line"
            className="h-full object-contain  lg:max-h-[400px]"
          />
          {positions.map((position, i) => {
            if (position.variants) {
              return position.variants.map((item, j) => (
                <div
                  key={j}
                  className={cx(
                    "absolute bg-white rounded-full size-8 text-green-800 transition duration-300  flex items-center justify-center",
                    isSelected(position.title) ? " " : "opacity-0"
                  )}
                  style={{
                    left: `${item.left}%`,
                    top: `${item.top}%`,
                  }}
                >
                  <span className=" font-bold text-xl">{position.title}</span>
                </div>
              ));
            } else
              return (
                <div
                  key={i}
                  className={cx(
                    "absolute bg-white rounded-full text-green-800 transition duration-300  size-8 flex items-center justify-center",
                    isSelected(position.title) ? " " : "opacity-0"
                  )}
                  style={{
                    left: `${position.position.left}%`,
                    top: `${position.position.top}%`,
                  }}
                >
                  <span className=" font-bold text-xl ">{position.title}</span>
                </div>
              );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 lg:mt-10 gap-10 w-full">
        <div key={"slider"} className="embla w-4/5" ref={emblaRef}>
          <div className="embla__container flex w-full">
            {slides.map((slide, i) => (
              <div key={i} className={cx("embla__slide flex-shrink-0 w-full")}>
                <ul className="flex gap-2 ">
                  {slide.numbers &&
                    slide.numbers.map((number, i) => (
                      <li
                        key={i}
                        className="bg-white size-10 rounded-full text-green-800 text-xl lg:text-[22px] items-center flex font-bold justify-center"
                        style={{
                          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.20)",
                        }}
                      >
                        <span>{number}</span>
                      </li>
                    ))}
                </ul>
                <h3 className="text-green-800 mt-4 text-2xl lg:text-[32px] font-bold">
                  {slide.title}
                </h3>
                <p className="text-black mt-4 text-base lg:text-xl font-medium leading-tight">
                  {slide.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
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
      </div>
    </Container>
  );
}
