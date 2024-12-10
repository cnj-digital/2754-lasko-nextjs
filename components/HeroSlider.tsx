"use client";
import cx from "classnames";
import Container from "./Container";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import Link from "next/link";

type HeroSliderProps = {
  slides: {
    title: string;
    copy: string;
    cta: string;
    url: string;
  }[];
};

const beers = [
  {
    title: "LAŠKO ZLATOROG",
    type: "Regular",
    description:
      "Svetlo pivo, ki že vrsto let predstavlja osrednjo znamko trženjskega portfolia.",
    additionalInfo:
      "Znamenje svetlega gospodovskega okusa. Bogata pena in značilno izražene grenčice.",
    specs: {
      alcohol: "4.9%",
      temperature: "5 do 8°C",
      taste: "Povezujoča izvirna fermenta nota",
    },
  },
  {
    title: "LAŠKO ZLATOROG TEMNO",
    type: "Dark",
    description: "Druga zbirka legendardnega zlatorogovega piva.",
    additionalInfo:
      "Laško Zlatorog temno pivo ponuja posebno doživetje piva s polnim okusom, značilno barvo in bogato peno.",
    specs: {
      alcohol: "4.9%",
      temperature: "6 do 8°C",
      taste: "Decentno temno pivo",
    },
  },
  {
    title: "LAŠKO ZLATOROG 0.0",
    type: "Non-alcoholic",
    description:
      "Prespominje, da še Zlatorog skozi stoletja, ne alkohol, je del njegove dni nasvetu kompletno.",
    additionalInfo: "Je točno tista Laško pivo ki ga sjutre pom...",
    specs: {
      alcohol: "0.0%",
      temperature: null,
      taste: null,
    },
  },
  {
    title: "LAŠKO MALT",
    type: "Malt",
    description:
      "V Ljubljani smo koalicijo in jubilezni en decentno tisoč osem in osemeset. Največo slovensko pivo.",
    additionalInfo: "Laško Malt je vlade meni brezelkoholnimi.",
    specs: {
      alcohol: null,
      temperature: null,
      taste: null,
    },
  },
  {
    title: "LAŠKO BURIN",
    type: "Special",
    description:
      "Laško Burin je nefilško drugačno pivo. Je tok zvrst, ki ima naj različna in močneje izražene lastnosti kot Laško pivo. Dodata sta mu koriandar kot pri oznan Laško pivo. Ostani sta sure del naše strosti za posebne priložnosti.",
    specs: {
      alcohol: null,
      temperature: null,
      taste: null,
    },
  },
  {
    title: "LAŠKO GOLDING",
    description:
      "Lahnotno ležanje, ki vrnjo prve votke naš hog narednica ne vse delovnje. Tekmovanci za golding Slovnskge Laško, ima pa polega slovenske države in posebej našo pivo skodelovanje.",
    specs: {
      alcohol: "5.1%",
      temperature: null,
      taste: null,
    },
  },
];

export default function HeroSlider({ slides }: HeroSliderProps) {
  const beerRefs = beers.map(() => useRef(null));
  const [activeIndex, setActiveIndex] = useState(0);

  const isInView = beerRefs.map((ref) =>
    useInView(ref, {
      amount: 0.8, // 50% of element must be in view
      once: false,
    })
  );

  // Update active index when an element comes into view
  useEffect(() => {
    const activeIdx = isInView.findIndex((inView) => inView);
    if (activeIdx !== -1) {
      setActiveIndex(activeIdx);
    }
  }, [isInView]);

  return (
    <div className="relative max-w-8xl mx-auto" style={{}}>
      <div className="sticky flex flex-col justify-center items-center top-0 h-screen">
        <div
          className="h-screen absolute top-0 left-0 w-full rounded-b-4xl transition-all"
          style={{ backgroundImage: `url("beers/bg_${activeIndex + 1}.jpg")` }}
        />
        <Container className="absolute flex justify-between w-full">
          <div className=" rounded-4xl shadow-card backdrop-blur-sm space-y-6 p-4 bg-white/20 bg-gradient-to-b from-transparent via-transparent to-black/20">
            {beers.map((beer, i) => (
              <Link
                href={`#${beer.title}`}
                key={i}
                className={cx(
                  " flex relative z-10 items-end justify-center rounded-2xl size-20 bg-black bg-opacity-20 hover:bg-opacity-100 transition duration-300 hover:bg-[#EDEDED]",
                  activeIndex === i && "bg-[#EDEDED] bg-opacity-100"
                )}
              >
                <img
                  src={`/beers/beer=beer${i + 1}.png`}
                  alt="beer"
                  className="h-[120%] object-contain"
                />
              </Link>
            ))}
          </div>

          <div className="relative max-w-lg flex items-center w-full">
            {beers.map((beer, i) => (
              <div
                key={i}
                className={cx(
                  "absolute transition-all duration-500",
                  i === activeIndex ? "opacity-100" : " opacity-0"
                )}
              >
                <h2 className="text-[52px] font-neutraface font-black leading-tight">
                  {beer.title}
                </h2>
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: beer.description }}
                ></div>
                <p>{beer.additionalInfo}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Container className="lg:pl-40 -mt-[90vh]">
        {beers.map((beer, i) => (
          <div
            key={i}
            id={`${beer.title}`}
            ref={beerRefs[i]}
            className="h-screen flex relative z-10 items-center snap-start"
          >
            <img
              src={`/beers/beer=beer${i + 1}.png`}
              alt="beer"
              className="h-[80%]"
            />
          </div>
        ))}
      </Container>
    </div>
  );
}
