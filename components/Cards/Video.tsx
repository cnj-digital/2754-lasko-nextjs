"use client";
import cx from "classnames";
import { generateAnchorLink } from "@/helpers/general";
import { useInView } from "motion/react";
import { useRef } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";

type CardVideoProps = {
  title: string;
  image: string;
  onClick: () => void;
  className?: string;
};

export default function CardVideo({
  title,
  image,
  className,
  onClick,
}: CardVideoProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });
  const { isMobile } = useScreenSize();

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cx(
        "group rounded-3xl shadow-card overflow-hidden w-full text-left",
        className
      )}
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="group transition-all w-full h-[260px] overflow-hidden relative">
        <Image
          alt={title}
          src={image}
          className={cx(
            "md:group-hover:scale-105 grayscale md:group-hover:grayscale-0 transition-all w-full h-full object-cover object-center",
            isInView && isMobile ? "scale-105 grayscale-0" : "scale-100"
          )}
          width={640}
          height={480}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black/[0.33] rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.409 9.35306C20.8893 9.60847 21.291 9.98975 21.5712 10.456C21.8514 10.9223 21.9994 11.4561 21.9994 12.0001C21.9994 12.544 21.8514 13.0778 21.5712 13.5441C21.291 14.0104 20.8893 14.3917 20.409 14.6471L7.597 21.6141C5.534 22.7371 3 21.2771 3 18.9681V5.03306C3 2.72306 5.534 1.26406 7.597 2.38506L20.409 9.35306Z"
                stroke="white"
                stroke-width="2.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="pl-8 pr-4 pt-6 text-black font-neutrafaceLight font-bold text-base leading-[140%] tracking-[0.48px] uppercase">
        Video
      </div>
      <div className="flex items-center pl-8 pr-4 pb-8 pt-0 justify-between">
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
    </button>
  );
}
