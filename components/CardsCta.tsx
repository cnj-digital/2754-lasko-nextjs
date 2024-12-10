"use client";

import { useState } from "react";
import CardCta from "./Cards/Cta";
import Container from "./Container";
import cx from "classnames";

type CardsCtaProps = {
  cards: {
    title: string;
    copy: string;
    cta: string;
    url: string;
    image: string;
  }[];
};

export default function CardsCta({ cards }: CardsCtaProps) {
  const [isHovered, setIsHovered] = useState(0);

  return (
    <Container className="pt-36 pb-32 grid lg:flex gap-10 w-full">
      {cards.map((card, i) => (
        <CardCta
          key={i}
          title={card.title}
          copy={card.copy}
          cta={card.cta}
          url={card.url}
          image={card.image}
          className="w-full h-full"
          isHovered={isHovered === i}
          setIsHovered={() => setIsHovered(i)}
        />
      ))}
    </Container>
  );
}
