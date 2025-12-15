"use client";
import React, { useEffect, useState } from "react";
import ButtonSolid from "./Buttons/Solid";
import Chevron from "./Icons/Chevron";
import Container from "./Container";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import cx from "classnames";
import Image from "next/image";

type HeroProps = {
  title: string;
  description: string;
  cta?: {
    title: string;
    link: string;
  };
  cta_second?: {
    title: string;
    link: string;
    assets_field: {
      permalink: string;
    };
  };
  backgroundUrl: string;
  backgroundMobileUrl?: string;
  isVideo?: boolean;
  banner?: {
    textleft: string;
    textright: string;
    textmobile: string;
    link: string;
  };
};

export default function HeroLanding({
  title,
  description,
  cta,
  cta_second,
  backgroundUrl,
  backgroundMobileUrl,
  isVideo = false,
  banner,
}: HeroProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 500], [0, 162]);

  return (
    <section className="relative w-full overflow-hidden max-w-8xl  mx-auto">
      <div className={cx(
        "relative z-10 rounded-b-3xl bg-black w-full max-h-screen overflow-hidden",
        description ? "pt-48 lg:aspect-[1.74]" : "aspect-[0.56] lg:aspect-[1.74]"
      )}>
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
          <>
            {backgroundMobileUrl && (
              <Image
                src={backgroundMobileUrl}
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover lg:hidden"
                width={640}
                height={427}
              />
            )}
            {backgroundUrl && (
          <Image
            src={backgroundUrl}
            alt="Hero background"
              className={cx(
                "absolute inset-0 w-full h-full object-cover",
                backgroundMobileUrl && "hidden lg:block"
              )}
              width={640}
              height={427}
          />
          )}
          </>
        )}

        <div className="absolute inset-0 bg-black/30" />

        <Container className="relative h-full w-full flex flex-col justify-end pb-16 px-8 lg:pb-32 items-start">
          <h1 className="text-[40px] leading-tight md:text-6xl font-bold text-white max-w-3xl font-neutraface mb-4 lg:mb-10 text-balance"> 
            {title}
          </h1>
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description || "" }} className="text-white text-xl lg:text-2xl font-medium max-w-3xl text-balance mb-4 lg:mb-10 "/> 
          )}
          <div className="lg:flex lg:items-center lg:gap-4">
          {cta && (
            <ButtonSolid
              title={cta.title}
              url={cta.link}
              icon={
                <Chevron className="text-white group-hover:translate-x-2 transition-transform size-6 " />
              }
            />
          )}
          {cta_second && (
            <ButtonSolid
             className="mt-6 lg:mt-0"
              title={cta_second.title}
              url={cta_second.link}
              icon={
                <Chevron className="text-white group-hover:translate-x-2 transition-transform size-6 " />
              }
            />
          )}
          </div>
        </Container>
      </div>
      {banner && isClient && (
        <motion.div className=" relative z-0" style={{ height: height }}>
          <Link
            href={banner?.link || "#"}
            className="w-full  absolute bottom-0 bg-cover bg-center pb-4 pt-12 rounded-b-3xl flex justify-center items-center  overflow-hidden lg:px-6"
            style={{ backgroundImage: 'url("/bg-200.svg")' }}
          >
            <div className="bg-gradient-to-b from-transparent rounded-b-3xl from-[32.27%] to-black/30 to-[85.96%] absolute inset-0 h-full w-full" />
            <p className="relative hidden w-1/3 lg:block text-right text-balance text-[32px] leading-tight font-bold text-white">
              {banner.textleft}
            </p>
            <Image
              src="/logo-200.png"
              alt="beer"
              className="relative object-contain h-28 lg:h-32 mx-6 lg:mx-40"
              width={200}
              height={200}
              style={{ width: 'auto' }}
            />
            <p className="relative  lg:flex text-[32px] w-1/3 text-balance  leading-tight font-bold text-white hidden items-center">
              {banner.textright}
              <Chevron className="text-white  size-10" />
            </p>
            {banner.textmobile && (
            <p className="relative  lg:hidden text-[21px]  leading-tight text-balance font-bold pr-8 text-white flex items-center justify-start">
              <span
                  suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: banner.textmobile || "",
                }}
                />
              <Chevron className="text-white  size-8 ml-2 flex-shrink-0" />
            </p>
            )}
          </Link>
        </motion.div>
      )}
    </section>
  );
}
