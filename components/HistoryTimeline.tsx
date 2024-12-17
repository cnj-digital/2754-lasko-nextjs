"use client";

import Container from "./Container";
import cx from "classnames";
import InfoIcon from "./Icons/Info";
import { Fragment, useState } from "react";
import { Dialog } from "@headlessui/react";
import CloseIcon from "./Icons/Close";
import { useKeenSlider } from "keen-slider/react";

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
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    loop: false,
    rubberband: false,
    slides: {
      perView: "auto",
    },
  });
  const [selected, setSelected] = useState<Event | undefined>(undefined);
  const maxLengthEventEven = Math.max(
    ...timeline.filter((_, i) => i % 2 === 0).map((year) => year.events.length)
  );
  const maxLengthEventOdd = Math.max(
    ...timeline.filter((_, i) => i % 2 === 1).map((year) => year.events.length)
  );

  return (
    <div className="w-full overflow-hidden">
      <Container className="">
        <div
          ref={sliderRef}
          className="keen-slider"
          style={{ overflow: "visible" }}
        >
          <div
            key={"s"}
            className="keen-slider__slide "
            style={{ width: 0 }}
          ></div>
          <div
            key={timeline.length}
            className="grid gap-x-6  py-10 px-6 keen-slider__slide flex-shrink-0"
            style={{
              gridTemplateColumns: `repeat(${timeline.length}, minmax(256px, 1fr))`,
              gridTemplateRows: `repeat(${
                maxLengthEventEven + maxLengthEventOdd + 1
              }, auto)`,
              overflow: "visible",
              // width: "calc(100% - (1020px / 2))",
              width: "min-content",
            }}
          >
            <div
              className="bg-green-700 h-20 -mx-6 px-6 py-2 rounded-full col-span-full relative z-10"
              style={{
                backgroundImage: 'url("bg-green.png")',
                gridRowStart: maxLengthEventEven + 1,
                gridColumnStart: 1,
              }}
            />
            {timeline.map((year, i) => (
              <Fragment key={i}>
                <h2
                  key={i}
                  className="text-[40px] font-neutraface font-bold py-2 self-center z-10 relative px-6 text-center   leading-none text-white w-64 "
                  style={{
                    gridColumnStart: i + 1,
                    gridRowStart: maxLengthEventEven + 1,
                  }}
                >
                  {year.year}
                </h2>
                {year.events.map((event, j) => (
                  <div
                    key={i + j}
                    style={{
                      gridRowStart:
                        i % 2 === 0
                          ? maxLengthEventEven - j
                          : maxLengthEventEven + 2 + j,
                      gridColumnStart: i + 1,
                    }}
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
                      className="bg-white hover:bg-green-700 text-green-800 transition hover:text-white px-4 py-3 mx-6 rounded-2xl shadow-card w-full flex items-center justify-between"
                      onClick={() => setSelected(event)}
                    >
                      <h3 className="text-lg leading-[1.4] font-semibold ">
                        {event.title}
                      </h3>
                      <InfoIcon className=" ml-4 flex-shrink-0 size-6" />
                    </button>
                  </div>
                ))}
              </Fragment>
            ))}
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
      </Container>
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
          "absolute inset-0 transition bg-black bg-opacity-50",
          item ? "opacity-100" : "opacity-0"
        )}
        onClick={() => onClose()}
      />
      <div
        className={cx(
          "relative rounded-t-3xl transition-all duration-200 lg:rounded-3xl lg:p-8 lg:pb-10 p-6 pb-12 text-white",
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
            className="w-full h-full object-cover rounded-2xl mt-6 "
          />
        )}
        <p className="text-lg leading-[1.4] mt-6">{item?.description}</p>
      </div>
    </Dialog>
  );
}
