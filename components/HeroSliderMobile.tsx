"use client";
import cx from "classnames";
import Container from "./Container";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import DocumentIcon from "./Icons/Document";
import { Slide } from "./HeroSlider";
import { generateAnchorLink } from "@/helpers/general";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Chevron from "./Icons/Chevron";

type HeroSliderProps = {
  slides: Slide[];
};

export default function HeroSliderMobile({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({});

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setActiveIndex(emblaApi.selectedScrollSnap());
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
    <div className="relative w-full overflow-hidden" style={{}}>
      <div className="sticky flex flex-col justify-center items-center top-0 z-10">
        {slides.map((beer, i) => (
          <div
            key={i}
            className={cx(
              " h-full bg-center absolute z-0 top-0 left-0 right-0 w-full rounded-b-4xl transition-all bg-cover duration-500",
              activeIndex === i ? "opacity-100" : "opacity-0 delay-150"
            )}
            style={{
              backgroundImage: `url("${beer.background}")`,
            }}
          />
        ))}

        <Container className="relative pt-72 w-full">
          <div className="absolute top-36 w-full z-20 flex gap-4 items-start p-4 overflow-auto -mx-6 px-6 md:justify-center">
            {slides.map((beer, i) => (
              <button
                key={i}
                className={cx(
                  " flex relative z-10 items-end flex-shrink-0 justify-center rounded-2xl size-20  transition duration-300",
                  activeIndex === i
                    ? "bg-[#EDEDED] bg-opacity-100"
                    : " bg-black bg-opacity-20 hover:bg-opacity-100 hover:bg-[#EDEDED]"
                )}
                onClick={() => emblaApi?.scrollTo(i)}
              >
                <img
                  src={beer.image}
                  alt="beer"
                  className="h-[120%] object-contain"
                />
              </button>
            ))}
          </div>
          <div className="relative">
            <div className=" absolute w-full justify-between top-64 z-10 flex gap-4 ml-auto">
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
            <div ref={emblaRef} className="relative -mx-6 embla">
              <div className="embla__container flex items-start w-full">
                {slides.map((beer, i) => (
                  <div
                    key={i}
                    className={cx(
                      " transition-all relative duration-500 pb-32 embla__slide flex-shrink-0 w-full px-6  "
                    )}
                  >
                    <h2
                      id={generateAnchorLink(beer.title)}
                      className="absolute left-0 right-0 px-4 text-center mix-blend-overlay text-[#F2F2F2] text-[60px] font-neutraface font-black leading-[1.2]"
                    >
                      {beer.title}
                    </h2>
                    <img
                      src={beer.image}
                      alt="beer"
                      className="w-full h-auto z-10 relative max-h-[600px] object-contain "
                    />
                    <div
                      className="font-medium text-white max-w-xl"
                      dangerouslySetInnerHTML={{ __html: beer.description }}
                    ></div>
                    {beer.specs && beer.specs.length > 0 && (
                      <div className=" border border-white rounded-2xl mt-8  max-w-xl">
                        <table className=" text-white">
                          <tbody className="divide-y divide-white">
                            {beer.specs.map((spec, i) => (
                              <tr
                                key={i}
                                className="divide-x divide-white w-full"
                              >
                                <th
                                  key={`key-${i}`}
                                  className="text-xl px-4 py-2 font-semibold text-left w-1/4"
                                >
                                  {spec.key}
                                </th>
                                <td
                                  key={`value-${i}`}
                                  className="text-xl px-4 py-2 font-semibold text-left w-3/4"
                                >
                                  {spec.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {beer.cta && (
                      <Link
                        href={beer.cta.link}
                        className=" backdrop-blur-sm inline-flex items-center text-xl font-semibold bg-white/10 mt-8 py-4 px-4 rounded-2xl"
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
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
