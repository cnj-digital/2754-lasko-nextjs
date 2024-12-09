import React from "react";
import ButtonSolid from "./Buttons/Solid";
import Chevron from "./Icons/Chevron";
import Container from "./Container";

type HeroProps = {
  title: string;
  cta?: string;
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
  return (
    <section className="relative w-full overflow-hidden max-w-8xl rounded-b-3xl aspect-[0.56] lg:aspect-[1.74] ">
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

      <Container className="relative h-full w-full flex flex-col justify-end pb-16 lg:pb-32 items-start">
        <h1 className="text-[40px] leading-tight md:text-6xl font-bold text-white max-w-3xl font-neutraface mb-4 lg:mb-10 text-balance">
          {title}
        </h1>

        {cta && (
          <ButtonSolid
            title={cta}
            url="/explore"
            icon={
              <Chevron className="text-white group-hover:translate-x-2 transition-transform size-6 " />
            }
          />
        )}
      </Container>
    </section>
  );
}
