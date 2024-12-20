"use client";
import React from "react";
import ButtonSolid from "./Buttons/Solid";
import Chevron from "./Icons/Chevron";
import Container from "./Container";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { strings } from "@/data/general";
import { usePathname } from "next/navigation";

type HeroProps = {
  title: string;
  cta?: {
    title: string;
    link: string;
  };
  backgroundUrl: string;
  isVideo?: boolean;
  banner?: {
    title: string;
    cta: string;
    image: string;
    background: string;
  };
};

export default function HeroLanding({
  title,
  cta,
  backgroundUrl,
  isVideo = false,
}: HeroProps) {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 500], [0, 162]);
  const pathname = usePathname();
  const currentLang = pathname?.split("/")[1];
  const lang =
    currentLang === "en" || currentLang === "si" ? currentLang : "si";

  return (
    <section className="relative w-full overflow-hidden max-w-8xl  ">
      <div className="relative z-10 rounded-b-3xl bg-black  aspect-[0.56] lg:aspect-[1.74] w-full overflow-hidden ">
        {isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={backgroundUrl}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/30" />

        <Container className="relative h-full w-full flex flex-col justify-end pb-16 px-8 lg:pb-32 items-start">
          <h1 className="text-[40px] leading-tight md:text-6xl font-bold text-white max-w-3xl font-neutraface mb-4 lg:mb-10 text-balance">
            {title}
          </h1>

          {cta && (
            <ButtonSolid
              title={cta.title}
              url={cta.link}
              icon={
                <Chevron className="text-white group-hover:translate-x-2 transition-transform size-6 " />
              }
            />
          )}
        </Container>
      </div>
      <motion.div className=" relative z-0" style={{ height: height }}>
        <Link
          href={strings[lang].landing.heroLink}
          className="w-full  absolute bottom-0 bg-cover bg-center pb-4 pt-12 rounded-b-3xl flex justify-center items-center  overflow-hidden lg:px-6"
          style={{ backgroundImage: 'url("/bg-200.svg")' }}
        >
          <div className="bg-gradient-to-b from-transparent rounded-b-3xl from-[32.27%] to-black/30 to-[85.96%] absolute inset-0 h-full w-full" />
          <p className="relative hidden w-1/3 lg:block text-balance text-[32px] leading-tight font-bold text-white">
            {strings[lang].landing.herotext}
          </p>
          <img
            src="/logo-200.png"
            alt="beer"
            className="relative object-contain h-28 lg:h-32 mx-6 lg:mx-40"
          />
          <p className="relative  lg:flex text-[32px] w-1/3 text-balance  leading-tight font-bold text-white hidden items-center">
            {strings[lang].landing.herotext2}
            <Chevron className="text-white  size-10" />
          </p>
          <p className="relative  lg:hidden text-[21px]  leading-tight text-balance font-bold pr-8 text-white flex items-center justify-start">
            <span
              dangerouslySetInnerHTML={{
                __html: strings[lang].landing.herotextMobile,
              }}
            ></span>
            <Chevron className="text-white  size-8 ml-2 flex-shrink-0" />
          </p>
        </Link>
      </motion.div>
    </section>
  );
}
