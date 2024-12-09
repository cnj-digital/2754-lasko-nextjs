import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import CardNews from "./Cards/News";
import Chevron from "./Icons/Chevron";

export default function DisclousureCards() {
  const years = [
    {
      year: 2020,
      cards: [
        {
          title: "title",
          tagline: "dogajanje",
          image: "/placeholders/news.png",
        },
        {
          title: "title",
          tagline: "dogajanje",
          image: "/placeholders/news.png",
        },
        {
          title: "title",
          tagline: "dogajanje",
          image: "/placeholders/news.png",
        },
        {
          title: "title",
          tagline: "dogajanje",
          image: "/placeholders/news.png",
        },
      ],
    },
    {
      year: 2021,
      cards: [
        {
          title: "title",
          tagline: "dogajanje",
          image: "/placeholders/news.png",
        },
        {
          title: "title",
          tagline: "dogajanje",
          image: "/placeholders/news.png",
        },
        {
          title: "title",
          tagline: "dogajanje",
          image: "/placeholders/news.png",
        },
        {
          title: "title",
          tagline: "dogajanje",
          image: "/placeholders/news.png",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 space-y-16">
      {years.map((year, i) => (
        <Disclosure defaultOpen={i === 0} key={i}>
          <DisclosureButton className="flex group gap-6 items-center">
            <h2 className="text-green-800 text-[52px] font-neutraface font-bold">
              {year.year}
            </h2>
            <Chevron className="text-green-800 size-10 rotate-90 group-data-[open]:-rotate-90 transition " />
          </DisclosureButton>
          <DisclosurePanel className="grid grid-cols-3 gap-x-8 gap-y-6 mt-6">
            {year.cards.map((card, i) => (
              <CardNews
                key={i}
                title={card.title}
                tagline={card.tagline}
                image={card.image}
              />
            ))}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  );
}
