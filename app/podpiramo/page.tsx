import CardsCta from "@/components/CardsCta";
import ExternalLinks from "@/components/ExternalLinks";
import HeroImage from "@/components/HeroImage";
import HorizontalCardGrid from "@/components/HorizontalCardGrid";

export default function Podpiramo() {
  return (
    <div>
      <HeroImage
        title="PODPIRAMO IN VRAČAMO DRUŽBI"
        copy="S srcem podpiramo športna društva, kulturne inštitucije ter skrbimo za okolje, saj trdno verjamemo, da lahko le skupaj tkemo boljšo prihodnost. Naše poslanstvo je prispevati k pozitivnim spremembam in opolnomočiti skupnost, kateri zvesto služimo."
        buttons={[
          {
            title: "Podpiramo",
            url: "#podpiramo",
          },
          {
            title: "Naši projekti",
            url: "#projekti",
          },
        ]}
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
