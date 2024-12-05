import CardNews from "./Cards/News";

type NewsSectionProps = {
  news: {
    title: string;
    tagline: string;
    image: string;
  }[];
};

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <section className="max-w-7xl py-20">
      <h2 className="text-2xl font-bold">Latest News</h2>
      <div className="grid lg:grid-cols-3 gap-8">
        {news.map((news, i) => (
          <CardNews
            key={i}
            title={news.title}
            tagline={news.tagline}
            image={news.image}
          />
        ))}
      </div>
    </section>
  );
}
