import Container from "./Container";
import cx from "classnames";
import InfoIcon from "./Icons/Info";

type HistoryTimelineProps = {
  timeline: {
    year: number | string;
    events: {
      title: string;
      description: string;
      image: string;
    }[];
  }[];
};
export default function HistoryTimeline({ timeline }: HistoryTimelineProps) {
  const maxLengthEventEven = Math.max(
    ...timeline.filter((_, i) => i % 2 === 0).map((year) => year.events.length)
  );
  const maxLengthEventOdd = Math.max(
    ...timeline.filter((_, i) => i % 2 === 1).map((year) => year.events.length)
  );

  return (
    <Container className="overflow-auto ">
      <div
        className="grid gap-x-6   py-5 px-6"
        style={{
          gridTemplateColumns: `repeat(${timeline.length}, minmax(256px, 1fr))`,
          gridTemplateRows: `repeat(${
            maxLengthEventEven + maxLengthEventOdd + 1
          }, auto)`,
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
          <>
            <h2
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
                key={j}
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
                <div className="bg-white px-4 py-3 mx-6 rounded-2xl shadow-card w-full flex items-center justify-between">
                  <h3 className="text-lg leading-[1.4] font-semibold text-green-800">
                    {event.title}
                  </h3>
                  <InfoIcon className="text-green-800 ml-4 flex-shrink-0 size-6" />
                </div>
              </div>
            ))}
          </>
        ))}
      </div>
    </Container>
  );
}
