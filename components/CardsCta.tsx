import CardCta from "./Cards/Cta";

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
  return (
    <section className=" pt-36 pb-32 flex max-w-7xl mx-auto gap-10 w-full">
      {cards.map((card, i) => (
        <CardCta
          key={i}
          title={card.title}
          copy={card.copy}
          cta={card.cta}
          url={card.url}
          image={card.image}
        />
      ))}
    </section>
  );
}
