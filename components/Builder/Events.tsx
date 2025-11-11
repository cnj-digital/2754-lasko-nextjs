"use client";
import CardNews from "@/components/Cards/News";

type EventItem = {
  id: string;
  title: string;
  permalink: string;
  url?: string;
  featured_image?: {
    permalink: string;
  };
};

type EventsProps = {
  title?: string;
  eventsItems?: {
    data?: EventItem[];
  };
};

export default function Events({ title, eventsItems }: EventsProps) {
  const events = eventsItems?.data || [];
  
  if (events.length === 0) return null;

  return (
    <section id="events" className="max-w-8xl w-full mx-auto my-20">
      {title && (
        <h2 className="text-green-800 font-black text-[32px] md:text-[48px] leading-tight font-neutraface mb-10">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
        {events.map((event) => (
          <CardNews
            key={event.id}
            title={event.title}
            image={event.featured_image?.permalink || "/placeholders/news.png"}
            url={event.url || event.permalink}
            category={"Dogajanje"}
          />
        ))}
      </div>
    </section>
  );
}


