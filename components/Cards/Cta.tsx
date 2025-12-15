"use client";
import Link from "next/link";
import Chevron from "../Icons/Chevron";
import cx from "classnames";
import { generateAnchorLink } from "@/helpers/general";
import { useRef } from "react";
import { useInView } from "motion/react";
import ArrowIcon from "../Icons/Arrow";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";

type CardCtaProps = {
  title: string;
  copy: string;
  cta: string;
  url: string;
  image: string;
  className?: string;
  isHovered: boolean;
  setIsHovered: () => void;
};

export default function CardCta({
  title,
  copy,
  cta,
  url,
  image,
  className,
  isHovered,
  setIsHovered,
}: CardCtaProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });
  const { isMobile } = useScreenSize();
  return (
    <Link
      ref={ref}
      href={url}
      className={cx(
        "relative block bg-white rounded-3xl overflow-hidden lg:overflow-x-hidden  shadow-card w-full flex-shrink transition-all group h-[460px] sm:h-[400px]",
        className,
        isHovered ? "lg:w-3/5" : "lg:w-2/5"
      )}
      onMouseEnter={() => setIsHovered()}
    >
      <div className="p-8 lg:h-full flex flex-col max-w-xs items-start relative z-10 ">
        <h3
          id={generateAnchorLink(title)}
          className=" font-neutraface text-[40px] text-green-800 leading-tight text-balance"
        >
          {title}
        </h3>
        <p className=" text-gray-600 text-xl font-semibold leading-[1.4]">
          {copy}
        </p>

        <button
          className={cx(
            "hidden relative mt-auto lg:flex rounded-xl pl-6 pr-2 py-2 items-center overflow-hidden border-2  transition text-left",
            isHovered
              ? "border-transparent text-white "
              : "text-gray-600 border-gray-600 "
          )}
        >
          <div
            className={cx(
              "h-full w-full absolute inset-0 text-2xl  transition-opacity",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            style={{
              background:
                " linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 99.91%), #449935",
            }}
          />
          <span className=" leading-snug transition z-10 relative font-semibold ">
            {cta}
          </span>
          <Chevron className="size-6 ml-3 transition  relative z-10" />
        </button>
      </div>

      <div className="lg:overflow-x-hidden lg:overflow-y-visible rounded-3xl -ml-[5%] lg:ml-0 w-full max-w-full h-full lg:absolute inset-0">
        <Image
          src={image}
          alt={title}
          className={cx(
            "relative sm:absolute object-contain object-bottom sm:left-1/2 md:left-[calc(100%-380px)]  xl:left-[calc(100%-400px)] rounded-3xl sm:bottom-0 transition origin-top  md:origin-bottom-right md:h-full",
            isHovered ? "lg:scale-105 " : "lg:scale-75",
            isInView && isMobile ? "scale-125 duration-300" : ""
          )}
          width={640}
          height={480}
        />
      </div>
      <div
        className={cx(
          "absolute right-4 bottom-4 bg-green-500 p-2 lg:hidden transition duration-300 rounded-2xl",
          isInView && isMobile ? "opacity-100" : "opacity-0"
        )}
      >
        <ArrowIcon className="text-white size-8 -rotate-90" />
      </div>
    </Link>
  );
}
