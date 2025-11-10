"use client";
import cx from "classnames";
import { generateAnchorLink } from "@/helpers/general";
import { useInView } from "motion/react";
import { useRef } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import Link from "next/link";

type CardMediaProps = {
  title: string;
  image: string;
  url: string;
  className?: string;
};

export default function CardMedia({ title, image, className, url }: CardMediaProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });
  const { isMobile } = useScreenSize();

  return (
    <div
      ref={ref}
      className={cx(
        "group rounded-3xl shadow-card overflow-hidden w-full p-8 bg-white",
        className
      )}
    >
      <div className="flex gap-4 justify-between">
        <div className="group transition-all w-[160px] h-[102px] overflow-hidden rounded-[9px]">
          <img
            alt={title}
            src={image}
            className={cx(
              " md:group-hover:scale-105 grayscale md:group-hover:grayscale-0 transition-all w-full h-full object-cover object-center rounded-[9px]",
              isInView && isMobile ? "scale-105 grayscale-0" : "scale-100"
            )}
          />
        </div>
        <Link
          href={url}
          className="flex items-center justify-center w-[52px] h-[52px] rounded-[16px] bg-black/[0.06] hover:bg-black/[0.12] transition-all duration-300 backdrop-blur-[2px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_10766_1483)">
              <path
                d="M25.9846 15.9931C25.466 15.4746 24.6175 15.4746 24.0989 15.9931L16.943 23.149L16.943 6.40473C16.943 5.66934 16.3491 5.07537 15.6137 5.07537C14.8783 5.07537 14.2843 5.66934 14.2843 6.40473L14.2843 23.149L7.12839 15.9931C6.60984 15.4746 5.76131 15.4746 5.24277 15.9931C4.72422 16.5116 4.72422 17.3602 5.24277 17.8787L14.6709 27.3068C15.1894 27.8253 16.0379 27.8253 16.5565 27.3068L25.9846 17.8787C26.5031 17.3602 26.5031 16.5116 25.9846 15.9931Z"
                fill="#7F7F7F"
              />
            </g>
            <defs>
              <clipPath id="clip0_10766_1483">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
      <div className="flex items-center pt-3 justify-between">
        <h3
          id={generateAnchorLink(title)}
          className={cx(
            "mt-1 text-2xl text-black font-bold line-clamp-2 md:group-hover:text-green-800",
            isInView && isMobile ? "text-green-800" : "text-black"
          )}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
