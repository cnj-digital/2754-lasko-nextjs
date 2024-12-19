import { generateAnchorLink } from "@/helpers/general";
import CardHorizontal from "./Cards/Horizontal";
import Container from "./Container";

type HorizontalCardGridProps = {
  title?: string;
  copy?: string;
  cards: {
    title: string;
    image: string;
    url: string;
  }[];
};

export default function HorizontalCardGrid({
  title,
  copy,
  cards,
}: HorizontalCardGridProps) {
  return (
    <Container className="py-12 md:py-20">
      {title && (
        <h2
          id={generateAnchorLink(title)}
          className="text-5xl font-neutraface font-black  leading-tight text-green-800"
        >
          {title}
        </h2>
      )}
      {copy && (
        <p className=" text-black mt-3 mb-10  font-semibold text-xl">{copy}</p>
      )}
      <div className="grid lg:grid-cols-3 gap-3 md:gap-8">
        {cards.map((card, i) => (
          <CardHorizontal
            key={i}
            title={card.title}
            url={card.url}
            image={card.image}
          />
        ))}
      </div>
    </Container>
  );
}
