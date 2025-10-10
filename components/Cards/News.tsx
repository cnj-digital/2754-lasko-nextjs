"use client";
import Link from "next/link";
import Chevron from "../Icons/Chevron";
import cx from "classnames";
import { generateAnchorLink } from "@/helpers/general";
import { useInView } from "motion/react";
import { useRef } from "react";
import useScreenSize from "@/hooks/useScreenSize";

type CardNewsProps = {
  title: string;
  image: string;
  url: string;
  className?: string;
  category?: string;
};

export default function CardNews({
  title,
  image,
  className,
  url,
  category,
}: CardNewsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });
  const { isMobile } = useScreenSize();

  return (
    <Link
      ref={ref}
      href={url}
      className={cx(
        "group rounded-3xl shadow-card overflow-hidden w-full",
        className
      )}
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="group  transition-all w-full h-[260px] overflow-hidden">
        <img
          alt={title}
          src={image}
          className={cx(
            " md:group-hover:scale-105 grayscale md:group-hover:grayscale-0 transition-all w-full h-full object-cover object-center",
            isInView && isMobile ? "scale-105 grayscale-0" : "scale-100"
          )}
        />
      </div>
      {category && (
        <div className="pl-8 pr-4 pt-6 text-black font-neutrafaceLight font-bold text-base leading-[140%] tracking-[0.48px] uppercase">
          {category}
        </div>
      )}
      <div className={cx("flex items-center pl-8 pr-4 pb-8 justify-between", !category && "pt-6")}>
        <h3
          id={generateAnchorLink(title)}
          className={cx(
            "mt-1 text-2xl text-black font-bold line-clamp-2 md:group-hover:text-green-800",
            isInView && isMobile ? "text-green-800" : "text-black"
          )}
        >
          {title}
        </h3>
        <Chevron
          className={cx(
            " text-black size-10 flex-shrink-0 md:group-hover:text-green-800 ",
            isInView && isMobile ? "text-green-800" : "text-black"
          )}
        />
      </div>
    </Link>
  );
}
