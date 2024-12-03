import React from "react";
import ButtonSolid from "./Buttons/Solid";

type HeroProps = {
  title: string;
  cta?: string;
  backgroundUrl: string;
  isVideo?: boolean;
};

const Hero = ({ title, cta, backgroundUrl, isVideo = false }: HeroProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden max-w-[1512px] rounded-b-3xl ">
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

      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-32 items-start">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl mb-10">
          {title}
        </h1>

        {cta && <ButtonSolid title={cta} url="/explore" />}
      </div>
    </section>
  );
};

export default Hero;
