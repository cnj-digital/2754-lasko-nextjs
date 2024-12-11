import CardsCta from "@/components/CardsCta";
import HeroSlider from "@/components/HeroSlider";

export default function Pivo() {
  return (
    <div>
      <HeroSlider
        slides={[
          {
            title: "LAŠKO ZLATOROG",
            description:
              "Svetlo pivo, ki že vrsto let predstavlja osrednjo znamko trženjskega portfolia.",
            additionalInfo:
              "Znamenje svetlega gospodovskega okusa. Bogata pena in značilno izražene grenčice.",
            specs: {
              alcohol: "4.9%",
              temperature: "5 do 8°C",
              taste: "Povezujoča izvirna fermenta nota",
            },
          },
          {
            title: "LAŠKO ZLATOROG TEMNO",
            description: "Druga zbirka legendardnega zlatorogovega piva.",
            additionalInfo:
              "Laško Zlatorog temno pivo ponuja posebno doživetje piva s polnim okusom, značilno barvo in bogato peno.",
            specs: {
              alcohol: "4.9%",
              temperature: "6 do 8°C",
              taste: "Decentno temno pivo",
            },
          },
          {
            title: "LAŠKO ZLATOROG 0.0",
            description:
              "Prespominje, da še Zlatorog skozi stoletja, ne alkohol, je del njegove dni nasvetu kompletno.",
            additionalInfo: "Je točno tista Laško pivo ki ga sjutre pom...",
            specs: {
              alcohol: "0.0%",
              temperature: null,
              taste: null,
            },
          },
          {
            title: "LAŠKO MALT",
            description:
              "V Ljubljani smo koalicijo in jubilezni en decentno tisoč osem in osemeset. Največo slovensko pivo.",
            additionalInfo: "Laško Malt je vlade meni brezelkoholnimi.",
            specs: {
              alcohol: null,
              temperature: null,
              taste: null,
            },
          },
          {
            title: "LAŠKO BURIN",
            description:
              "Laško Burin je nefilško drugačno pivo. Je tok zvrst, ki ima naj različna in močneje izražene lastnosti kot Laško pivo. Dodata sta mu koriandar kot pri oznan Laško pivo. Ostani sta sure del naše strosti za posebne priložnosti.",
            specs: {
              alcohol: null,
              temperature: null,
              taste: null,
            },
          },
          {
            title: "LAŠKO GOLDING",
            description:
              "Lahnotno ležanje, ki vrnjo prve votke naš hog narednica ne vse delovnje. Tekmovanci za golding Slovnskge Laško, ima pa polega slovenske države in posebej našo pivo skodelovanje.",
            specs: {
              alcohol: "5.1%",
              temperature: null,
              taste: null,
            },
          },
        ]}
      />
      <CardsCta
        cards={[
          {
            title: "Spoznaj naše pivo",
            copy: "Nabor piv, polnjenih v Laškem.",
            cta: "Razišči",
            url: "/pivo",
            image: "/placeholders/beer.png",
          },
          {
            title: "Podpiramo invračamo družbi",
            copy: "Podpiramo športna društva in kulturne inštitucije.",
            cta: "Razišči",
            url: "/podpiramo",
            image: "/placeholders/podpiramo.png",
          },
        ]}
      />
    </div>
  );
}
