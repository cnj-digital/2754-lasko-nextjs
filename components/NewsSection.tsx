"use client";

import { useState } from "react";
import CardNews from "./Cards/News";
import ButtonSolid from "./Buttons/Solid";
import Chevron from "./Icons/Chevron";
import Container from "./Container";

type NewsSectionProps = {
  news: {
    title: string;
    slug: string;
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
      <Container className="grid lg:grid-cols-3 gap-8 ">
        {news.slice(0, itemsShown).map((news, i) => (
          <CardNews
            key={i}
            title={news.title}
            slug={news.slug}
            image={news.image}
            className={i % 7 === 0 || i % 7 === 6 ? "lg:col-span-2" : ""}
          />
        ))}
      </Container>

      <ButtonSolid
        title="Naloži naslednjih 7"
        icon={<Chevron className="text-white  rotate-90  size-6 " />}
        onClick={() => setItemsShown(itemsShown + 7)}
        className="mt-16"
      />
    </section>
  );
}
