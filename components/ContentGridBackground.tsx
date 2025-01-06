import { generateAnchorLink } from "@/helpers/general";
import Container from "./Container";
import cx from "classnames";

type ContentGridBackgroundProps = {
  title: string;
  sections: {
    title: string;
    copy: string;
    type: string;
    items: {
      image: string;
      title: string;
      copy: string;
    }[];
  }[];
};

export default function ContentGridBackground({
  title,
  sections,
}: ContentGridBackgroundProps) {
  return (
    <div
      className="max-w-8xl py-20 w-full mx-auto flex flex-col items-center rounded-4xl "
      style={{ backgroundImage: "url('/bg-green.jpg')" }}
    >
      <Container className="w-full">
        <h2
          id={generateAnchorLink(title)}
          className="text-white font-neutraface text-[40px] lg:text-[52px] leading-tightt"
        >
          {title}
        </h2>

        <div className="mt-16 space-y-32">
          {sections.map((section, i) => (
            <div key={i} className="w-full">
              <h3
                id={generateAnchorLink(section.title)}
                className="text-[26px] lg:text-[32px] leading-[1.4] font-black text-white"
              >
                {section.title}
              </h3>
              <div
                className="mt-10 font-medium text-xl text-white"
                dangerouslySetInnerHTML={{ __html: section.copy }}
              ></div>
              <div
                className={cx(
                  "lg:grid  mt-16 gap-6 lg:gap-10 -mx-6 lg:mx-0 px-6 lg:px-0 overflow-auto flex snap-mandatory snap-x scroll-p-8",
                  section.type === "horizontal" ? "grid-cols-2" : "grid-cols-3"
                )}
              >
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className={cx(
                      "flex flex-col items-start gap-6 lg:gap-10 w-4/5 lg:w-full flex-shrink-0 snap-start",
                      section.type === "horizontal" ? "lg:flex-row " : ""
                    )}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={cx(
                        " rounded-2xl object-cover",
                        section.type === "horizontal"
                          ? " lg:w-1/2  aspect-square"
                          : "w-full aspect-[1.3]"
                      )}
                    />
                    <div className="text-white">
                      <h4
                        id={generateAnchorLink(item.title)}
                        className="text-2xl lg:text-[32px] leading-tight font-bold"
                      >
                        {item.title}
                      </h4>
                      <p className="text-base lg:text-lg font-medium mt-4">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
