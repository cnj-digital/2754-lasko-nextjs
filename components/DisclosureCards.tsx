import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import CardNews from "./Cards/News";
import Chevron from "./Icons/Chevron";
import Container from "./Container";

type DisclousureCardsProps = {
  articles: {
    title: string;
    date: string;
    tagline: string;
    image: string;
    url: string;
  }[];
};

export default function DisclousureCards({ articles }: DisclousureCardsProps) {
  const years = Array.from(
    new Set(
      articles.map((article) => {
        const date = new Date(article.date);
        if (isNaN(date.getTime())) {
          console.error("Invalid date:", article.date);
          return 0; // or some default year
        }
        return date.getFullYear();
      })
    )
  )
    .filter((year) => year !== 0) // Remove invalid dates
    .sort((a, b) => b - a)
    .map((year) => ({
      year,
      cards: articles.filter((article) => {
        const date = new Date(article.date);
        return !isNaN(date.getTime()) && date.getFullYear() === year;
      }),
    }));

  return (
    <Container className=" py-10 space-y-16">
      {years.map((year, i) => (
        <Disclosure defaultOpen={i === 0} key={i}>
          <DisclosureButton className="flex group gap-6 items-center w-full justify-between lg:w-auto">
            <h2 className="text-green-800 text-[40px] lg:text-[52px] font-neutraface font-bold">
              {year.year}
            </h2>
            <Chevron className="text-green-800 size-10 rotate-90 group-data-[open]:-rotate-90 transition " />
          </DisclosureButton>
          <DisclosurePanel className="grid lg:grid-cols-3 gap-x-8 gap-y-6 mt-6">
            {year.cards.map((card, i) => (
              <CardNews
                url={card.url}
                key={i}
                title={card.title}
                image={card.image}
              />
            ))}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </Container>
  );
}
