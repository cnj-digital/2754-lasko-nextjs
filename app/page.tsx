import CardsCta from "@/components/CardsCta";
import ExternalLinks from "@/components/ExternalLinks";
import HeroLanding from "@/components/HeroLanding";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroLanding
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
        ]}
      />
      <CardsCta
        cards={[
          {
            title: "Spoznaj naše pivo",
            copy: "Nabor piv, polnjenih v Laškem.",
            cta: "Razišči",
            url: "url",
            image: "/placeholders/beer.png",
          },
          {
            title: "Spoznaj naše pivo",
            copy: "Nabor piv, polnjenih v Laškem.",
            cta: "Razišči",
            url: "url",
            image: "/placeholders/beer.png",
          },
        ]}
      />
    </div>
  );
}
