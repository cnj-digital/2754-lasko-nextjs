import CardCta from "./Cards/Cta";
import Container from "./Container";

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
    <Container className="pt-36 pb-32 grid lg:grid-cols-2 gap-10 w-full">
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
    </Container>
  );
}
