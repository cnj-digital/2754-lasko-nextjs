import CardsCta from "@/components/CardsCta";
import ExternalLinks from "@/components/ExternalLinks";
import HeroImage from "@/components/HeroImage";
import HorizontalCardGrid from "@/components/HorizontalCardGrid";

export default function Support({ hero_support }: any) {
  console.log("hero_support", hero_support);
  return (
    <div>
      <HeroImage
        title={hero_support.title}
        copy={hero_support.support_hero_content}
        buttons={hero_support.support_hero_ctas.map((cta: any) => ({
          title: cta.title,
          url: cta.url,
        }))}
        image="/placeholders/podpiramo.png"
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
        title="Naši projekti"
        copy="Z dejanji vračamo družbi. Ponosni smo na naš prispevek k pozitivnim spremembam."
      />
      <HorizontalCardGrid
        title={"Podpiramo"}
        copy={
          "Društva in inštitucije, ki jih s ponosom podpiramo. Skupaj gradimo močnejšo skupnost."
        }
        cards={[
          {
            title: "NK Maribor",
            url: "",
            image: "/placeholders/club.png",
          },
          {
            title: "NK Maribor",
            url: "",
            image: "/placeholders/club.png",
          },
          {
            title: "NK Maribor",
            url: "",
            image: "/placeholders/club.png",
          },
          {
            title: "NK Maribor",
            url: "",
            image: "/placeholders/club.png",
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
