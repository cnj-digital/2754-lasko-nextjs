"use client";
import CardNews from "@/components/Cards/News";

type NewsItem = {
  title: string;
  permalink: string;
  url?: string;
  featured_image?: {
    permalink: string;
  };
  card_image?: {
    permalink: string;
  };
};

type NewsProps = {
  title?: string;
  items?: NewsItem[];
};

export default function News({ title, items = [] }: NewsProps) {
  
  if (!items || items.length === 0) return null;

  return (
    <section id="news" className="max-w-8xl w-full mx-auto my-20">
      {title && (
        <h2 className="text-green-800 font-black text-[32px] md:text-[48px] leading-tight font-neutraface mb-10">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <CardNews
            key={index}
            title={item.title}
            image={item.card_image?.permalink || item.featured_image?.permalink || "/placeholders/news.png"}
            url={item.url || item.permalink}
            category={"Novica"}
          />
        ))}
      </div>
    </section>
  );
}


