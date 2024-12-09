"use client";

import { useState } from "react";
import CardNews from "./Cards/News";
import ButtonSolid from "./Buttons/Solid";
import Chevron from "./Icons/Chevron";

type NewsSectionProps = {
  news: {
    title: string;
    tagline: string;
    image: string;
  }[];
};

export default function NewsSection({ news }: NewsSectionProps) {
  const [itemsShown, setItemsShown] = useState(7);

  return (
    <section
      className="max-w-8xl py-20 w-full mx-auto flex flex-col items-center bg-green-700 rounded-4xl bg-blend-color-burn"
      style={{ backgroundImage: "url('/bg-green.png')" }}
    >
      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl">
        {news.slice(0, itemsShown).map((news, i) => (
          <CardNews
            key={i}
            title={news.title}
            tagline={news.tagline}
            image={news.image}
            className={i % 6 === 0 ? "col-span-2" : ""}
          />
        ))}
      </div>

      <ButtonSolid
        title="Naloži naslednjih 7"
        icon={<Chevron className="text-white  rotate-90  size-6 " />}
        onClick={() => setItemsShown(itemsShown + 3)}
        className="mt-16"
      />
    </section>
  );
}
