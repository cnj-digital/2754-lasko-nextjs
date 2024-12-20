"use client";

import Container from "./Container";
import cx from "classnames";
import InfoIcon from "./Icons/Info";
import { Fragment, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import CloseIcon from "./Icons/Close";
import useEmblaCarousel from "embla-carousel-react";
import Chevron from "./Icons/Chevron";
import { motion, useMotionValue, useTransform } from "motion/react";

type Event = {
  title: string;
  description: string;
  image: string;
  cta?: string;
};

type HistoryTimelineProps = {
  timeline: {
    year: number | string;
    events: Event[];
  }[];
};
export default function HistoryTimeline({ timeline }: HistoryTimelineProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const [selected, setSelected] = useState<Event | undefined>(undefined);
  const maxLengthEventEven = Math.max(
    ...timeline.filter((_, i) => i % 2 === 0).map((year) => year.events.length)
  );
  const maxLengthEventOdd = Math.max(
    ...timeline.filter((_, i) => i % 2 === 1).map((year) => year.events.length)
  );

  const progressValue = useMotionValue(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      progressValue.set(progress);
    };

    emblaApi.on("scroll", onScroll);
    onScroll();

    return () => {
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi]);

  return (
    <div className="w-full max-w-8xl mx-auto overflow-hidden">
      <Container className="">
        <div ref={emblaRef} className="embla" style={{ overflow: "visible" }}>
          <div className="embla__container">
            <div key={"s"} className="embla__slide " style={{ width: 0 }}></div>
            <div
              key={timeline.length}
              className="relative grid gap-x-6  py-10 px-6 embla__slide flex-shrink-0"
              style={{
                gridTemplateColumns: `repeat(${timeline.length}, minmax(256px, 1fr))`,
                gridTemplateRows: `repeat(${
                  maxLengthEventEven + maxLengthEventOdd + 1
                }, auto)`,
                overflow: "visible",
                width: "min-content",
              }}
            >
              <Background progress={progressValue} />
              <div
                className="h-20 -mx-6 px-6 py-2 rounded-full col-span-full relative z-10"
                style={{
                  backgroundImage: 'url("/bg-green.jpg")',
                  gridRowStart: 2,
                  gridColumnStart: 1,
                }}
              />
              {timeline.map((year, i) => (
                <Fragment key={i}>
                  <h2
                    key={i}
                    className="text-[40px] relative font-neutraface font-bold py-2 self-center z-10 px-2 text-center   leading-none text-white w-auto "
                    style={{
                      gridColumnStart: i + 1,
                      gridRowStart: 2,
                    }}
                  >
                    {year.year}
                  </h2>
                  <div
                    className={cx(
                      "flex flex-col relative",
                      i % 2 === 0 ? "flex-col-reverse" : ""
                    )}
                    style={{
                      gridRowStart: i % 2 === 0 ? 1 : 3,
                      gridColumnStart: i + 1,
                    }}
                  >
                    {year.events.map((event, j) => (
                      <div
                        key={i + j}
                        className={cx(
                          "w-full flex flex-col items-center",
                          i % 2 === 0 ? " justify-end " : ""
                        )}
                      >
                        <div
                          className={cx(
                            " bg-green-700 size-8 ",
                            j === 0 ? "" : "hidden",
                            i % 2 === 0
                              ? "rounded-t-full order-last -mb-4"
                              : "rounded-b-full order-first -mt-4"
                          )}
                        />
                        <div
                          className={cx(
                            " w-1.5 h-4 bg-green-700",
                            i % 2 === 0
                              ? j === 0
                                ? "order-2"
                                : " order-last"
                              : j === 0
                              ? "order-first"
                              : " order-first"
                          )}
                        />
                        <button
                          className="bg-white hover:bg-green-700 text-green-800 transition hover:text-white px-4 py-3 mx-6 rounded-2xl shadow-card w-full flex items-center text-left justify-between"
                          onClick={() => setSelected(event)}
                        >
                          <h3 className="text-lg leading-[1.4] font-semibold ">
                            {event.title}
                          </h3>
                          <InfoIcon className=" ml-4 flex-shrink-0 size-6" />
                        </button>
                      </div>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <ItemModal
          onClose={() => setSelected(undefined)}
          item={selected}
          year={
            timeline.find((item) =>
              selected ? item.events.includes(selected) : false
            )?.year
          }
        />
        <div className="  w-full justify-end top-64 z-10 flex gap-4 ml-auto">
          <button
            className=" bg-black p-2 bg-opacity-20 rounded-2xl backdrop-blur-sm"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <Chevron className="size-8 rotate-180 text-white" />
          </button>
          <button
            className=" bg-black p-2 bg-opacity-20 rounded-2xl backdrop-blur-sm"
            onClick={() => emblaApi?.scrollTo(0.1)}
          >
            <Chevron className="size-8 text-white" />
          </button>
        </div>
      </Container>
    </div>
  );
}

function Background({ progress }: { progress: any }) {
  const repeat = 10;
  const rotation = useTransform(progress, [0, 1], [0, 720]);

  return (
    <div className="absolute inset-0   z-0 w-full h-full flex">
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className="relative w-[1700px] flex-shrink-0 pointer-events-none select-none"
        >
          <img
            src={"/placeholders/barrel.png"}
            alt="barrel"
            className="absolute top-[60%] left-[10%] z-0 "
          />
          <img
            src={"/placeholders/barrel.png"}
            alt="barrel"
            className="absolute top-[30%] rotate-45 left-[40%] z-0 "
          />
          <img
            src={"/placeholders/beer.png"}
            alt="beer"
            className="absolute top-[60%] left-[80%] scale-90 z-0 "
          />
          {/* <img
            src={"/placeholders/beer.png"}
            alt="beer"
            className="absolute top-[60%] left-[80%] scale-90 z-0 "
          /> */}
          <img
            src={"/placeholders/berries.png"}
            alt="berries"
            className="absolute top-[60%] left-[55%] z-0 "
          />
          <motion.img
            src={"/placeholders/hourglass.png"}
            alt="hourglass"
            className="absolute top-[25%] left-[65%] z-0 "
            style={{
              scale: 0.6,
              rotate: rotation,
            }}
          />
          <motion.img
            src={"/placeholders/hourglass.png"}
            alt="hourglass"
            className="absolute top-[70%] left-[35%] z-0 "
            style={{
              scale: 0.9,
              rotate: rotation,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function ItemModal({
  onClose,
  item,
  year,
}: {
  onClose: () => void;
  item?: Event;
  year?: string | number;
}) {
  return (
    <Dialog
      open={item !== undefined}
      onClose={onClose}
      static
      className={cx(
        "fixed inset-0 z-[100] flex items-end lg:items-center justify-center",
        item ? "" : "pointer-events-none"
      )}
    >
      <div
        className={cx(
          "absolute inset-0 transition bg-black bg-opacity-50 ",
          item ? "opacity-100" : "opacity-0"
        )}
        onClick={() => onClose()}
      />
      <div
        className={cx(
          "relative rounded-t-3xl transition-all duration-200 lg:rounded-3xl lg:p-8 lg:pb-10 p-6 pb-12 text-white max-w-3xl",
          item
            ? "translate-y-0 lg:opacity-100 "
            : "translate-y-full lg:translate-y-0 lg:opacity-0"
        )}
        style={{ backgroundImage: 'url("/bg-green.jpg")' }}
      >
        <button
          onClick={onClose}
          className=" absolute top-4 right-4 lg:top-6 lg:right-6 p-2.5 rounded-2xl lg:bg-black lg:bg-opacity-20"
        >
          <CloseIcon className=" size-8" />
        </button>

        <h2 className=" font-neutraface font-bold text-[40px] leading-tight pr-16">
          {year}
        </h2>
        <h3 className=" text-[28px] leading-[1.4] font-bold pr-16">
          {item?.title}
        </h3>
        {item?.image && (
          <img
            src={item?.image}
            alt="event"
            className="w-full aspect-video object-cover rounded-2xl mt-6 "
          />
        )}
        {item && (
          <div
            className="text-lg leading-[1.4] mt-6"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></div>
        )}
      </div>
    </Dialog>
  );
}
