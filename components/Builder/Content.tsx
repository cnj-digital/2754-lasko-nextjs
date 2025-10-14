import { generateAnchorLink, isExternalLink } from "@/helpers/general";
import cx from "classnames";
import Link from "next/link";
import ArrowDiagonalIcon from "../Icons/ArrowDiagonal";

export type ContentProps = {
  title: string | null;
  variant: {
    value: string;
  };
  asset: { permalink: string } | null;
  content_field: (Cta | Text)[];
};

type Text = {
  text: string;
  type: "text";
};

type Cta = {
  cta: {
    link: string;
    asset?: { permalink: string };
    title: string;
  };
  type: "cta_set";
};

export default function Content({
  title,
  asset,
  variant,
  content_field,
}: ContentProps) {
  console.log(content_field);
  return (
    <div
      className={cx(
        "flex flex-col py-10 gap-10 w-full overflow-hidden lg:grid",
        asset ? "lg:grid-cols-2" : ""
      )}
    >
      {/* Title - always first on mobile */}
      {title && (
        <h2
          id={generateAnchorLink(title)}
          className="text-green-800 font-black text-[40px] leading-tight font-neutraface lg:hidden"
        >
          {title}
        </h2>
      )}

      {/* Image - second on mobile, positioned via order on desktop */}
      {asset && (
        <img
          src={asset.permalink}
          alt="content"
          className={cx(
            "rounded-2xl",
            variant?.value === "left" ? "lg:order-1" : "lg:order-2"
          )}
        />
      )}

      {/* Text container - includes title on desktop, content always */}
      <div
        className={cx(
          "lg:px-6 w-full",
          variant?.value === "left" ? "lg:order-2" : "lg:order-1"
        )}
      >
        {title && (
          <h2
            id={generateAnchorLink(title)}
            className="text-green-800 font-black text-[40px] leading-tight font-neutraface hidden lg:block"
          >
            {title}
          </h2>
        )}
        <div className="lg:mt-4 w-full">
          {content_field.map((item, i) => {
            if (item.type === "text") {
              return (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                  className="content w-full"
                />
              );
            } else if (item.type === "cta_set") {
              return (
                <Link
                  key={i}
                  href={item.cta.link}
                  target={isExternalLink(item.cta.link) ? "_blank" : "_self"}
                  className="inline-flex py-3 px-4 gap-4 shadow-small-card my-8 bg-white rounded-2xl"
                >
                  {item.cta.asset && (
                    <img
                      src={item.cta.asset.permalink}
                      alt="content"
                      className="size-10 object-contain rounded-lg overflow-clip"
                    />
                  )}
                  <span className="text-xl font-semibold leading-[1.4] text-black">
                    {item.cta.title}
                  </span>
                  {isExternalLink(item.cta.link) && (
                    <ArrowDiagonalIcon className="size-6 text-black" />
                  )}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
