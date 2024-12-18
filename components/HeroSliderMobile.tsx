"use client";
import cx from "classnames";
import Container from "./Container";
import { useState } from "react";
import Link from "next/link";
import DocumentIcon from "./Icons/Document";
import { Slide } from "./HeroSlider";

type HeroSliderProps = {
  slides: Slide[];
};

export default function HeroSliderMobile({ slides }: HeroSliderProps) {
  const [activeIndex] = useState(0);

  return (
    <div className="relative w-full overflow-hidden" style={{}}>
      <div className="sticky flex flex-col justify-center items-center top-0 z-10">
        <div
          className=" absolute h-full z-0 top-0 left-0 w-full rounded-b-4xl transition-all bg-cover"
          style={{
            backgroundImage: `url("${slides[activeIndex].background}")`,
          }}
        />

        <Container className="relative pt-60 w-full">
          <div className="absolute top-32 w-full z-20 flex gap-4 items-start p-4 overflow-auto -mx-8 px-8">
            {slides.map((beer, i) => (
              <Link
                href={`#${beer.title}`}
                key={i}
                className={cx(
                  " flex relative z-10 items-end flex-shrink-0 justify-center rounded-2xl size-20  transition duration-300",
                  activeIndex === i
                    ? "bg-[#EDEDED] bg-opacity-100"
                    : " bg-black bg-opacity-20 hover:bg-opacity-100 hover:bg-[#EDEDED]"
                )}
              >
                <img
                  src={`/beers/beer=beer${i + 1}.png`}
                  alt="beer"
                  className="h-[120%] object-contain"
                />
              </Link>
            ))}
          </div>
          <div className="relative max-w-lg flex items-center w-full">
            {slides.map((beer, i) => (
              <div
                key={i}
                className={cx(
                  " transition-all duration-500 pb-32",
                  i === activeIndex ? "opacity-100" : " opacity-0"
                )}
              >
                <h2 className="absolute w-full text-center mix-blend-overlay text-[#F2F2F2] text-[60px] font-neutraface font-black leading-tight">
                  {beer.title}
                </h2>
                <img
                  src={`/beers/beer=beer${i + 1}.png`}
                  alt="beer"
                  className="w-full h-auto z-10 relative "
                />
                <div
                  className="font-medium text-white"
                  dangerouslySetInnerHTML={{ __html: beer.description }}
                ></div>
                {beer.specs && beer.specs.length > 0 && (
                  <div className="grid auto-cols-auto grid-flow-col border border-white rounded-2xl mt-8">
                    <div className=" divide-y divide-white border-r">
                      {beer.specs.map((spec, i) => (
                        <p key={i} className=" text-xl px-4 py-2 font-semibold">
                          {spec.key}
                        </p>
                      ))}
                    </div>
                    <div className="divide-y divide-white">
                      {beer.specs.map((spec, i) => (
                        <p key={i} className=" text-xl px-4 py-2 font-semibold">
                          {spec.value}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {beer.cta && (
                  <Link
                    href={beer.cta.link}
                    className=" backdrop-blur-sm flex items-center text-xl font-semibold bg-white/10 mt-8 py-4 px-4 rounded-2xl"
                    style={{
                      boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    {beer.cta.title}
                    <DocumentIcon className="size-6 ml-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
