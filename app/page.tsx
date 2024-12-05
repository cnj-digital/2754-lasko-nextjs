import ExternalLinks from "@/components/ExternalLinks";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero
        backgroundUrl="/placeholders/hero-lasko.mp4"
        title="Laško music: Živi ritem zelenega srca!"
        cta="Razišči"
        isVideo
      />
      <ExternalLinks
        links={[
          {
            image: "/placeholders/pivocvetje.png",
            url: "https://www.pivoincvetje.si/",
          },
          {
            image: "/placeholders/gremo.png",
            url: "https://www.gremo.org/",
          },
          {
            image: "/placeholders/pohor.png",
            url: "https://www.pohorje.org/",
          },
        ]}
        pageLinks={[
          {
            title: "Pivo in cvetje",
            image: "/placeholders/pivocvetje.png",
            url: "https://www.pivoincvetje.si/",
          },
          {
            title: "Gremo v hribe",
            image: "/placeholders/gremo.png",
            url: "https://www.gremo.org/",
          },
        ]}
      />
      <NewsSection
        news={[
          {
            title: "title",
            tagline: "dogajanje",
            image: "/placeholders/news.png",
          },
        ]}
      />
      {/* /filler */}
      <div className="max-w-7xl mx-auto px-4 py-8 h-[1200px]" />
    </div>
  );
}
