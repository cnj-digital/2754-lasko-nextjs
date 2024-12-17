import CardsCta from "@/components/CardsCta";
import HeroSlider from "@/components/HeroSlider";
import HeroSliderMobile from "@/components/HeroSliderMobile";

export default function Pivo() {
  return (
    <div>
      <div className="hidden lg:block">
        <HeroSlider
          slides={[
            {
              title: "LAŠKO ZLATOROG",
              description:
                "Svetlo pivo, ki že vrsto let predstavlja osrednjo znamko trženjskega portfolia.",
              specs: [
                { key: "alcohol", value: "4.9%" },
                { key: "temperature", value: "5 do 8°C" },
                { key: "taste", value: "Povezujoča izvirna fermenta nota" },
              ],
            },
            {
              title: "LAŠKO ZLATOROG TEMNO",
              description: "Druga zbirka legendardnega zlatorogovega piva.",
              specs: [
                { key: "alcohol", value: "4.9%" },
                { key: "temperature", value: "6 do 8°C" },
                { key: "taste", value: "Decentno temno pivo" },
              ],
            },
            {
              title: "LAŠKO ZLATOROG 0.0",
              description:
                "Prespominje, da še Zlatorog skozi stoletja, ne alkohol, je del njegove dni nasvetu kompletno.",
              specs: [{ key: "alcohol", value: "0.0%" }],
            },
            {
              title: "LAŠKO MALT",
              description:
                "V Ljubljani smo koalicijo in jubilezni en decentno tisoč osem in osemeset. Največo slovensko pivo.",
              specs: [],
            },
            {
              title: "LAŠKO GOLDING",
              description:
                "Lahnotno ležanje, ki vrnjo prve votke naš hog narednica ne vse delovnje. Tekmovanci za golding Slovnskge Laško, ima pa polega slovenske države in posebej našo pivo skodelovanje.",
              specs: [{ key: "alcohol", value: "5.1%" }],
            },
          ]}
        />
      </div>
      <div className="lg:hidden">
        <HeroSliderMobile
          slides={[
            {
              title: "LAŠKO ZLATOROG",
              description:
                "Svetlo pivo, ki že vrsto let predstavlja osrednjo znamko trženjskega portfolia.",
              specs: [
                { key: "alcohol", value: "4.9%" },
                { key: "temperature", value: "5 do 8°C" },
                { key: "taste", value: "Povezujoča izvirna fermenta nota" },
              ],
            },
            {
              title: "LAŠKO ZLATOROG TEMNO",
              description: "Druga zbirka legendardnega zlatorogovega piva.",
              specs: [
                { key: "alcohol", value: "4.9%" },
                { key: "temperature", value: "6 do 8°C" },
                { key: "taste", value: "Decentno temno pivo" },
              ],
            },
            {
              title: "LAŠKO ZLATOROG 0.0",
              description:
                "Prespominje, da še Zlatorog skozi stoletja, ne alkohol, je del njegove dni nasvetu kompletno.",
              specs: [{ key: "alcohol", value: "0.0%" }],
            },
            {
              title: "LAŠKO MALT",
              description:
                "V Ljubljani smo koalicijo in jubilezni en decentno tisoč osem in osemeset. Največo slovensko pivo.",
              specs: [],
            },
            {
              title: "LAŠKO GOLDING",
              description:
                "Lahnotno ležanje, ki vrnjo prve votke naš hog narednica ne vse delovnje. Tekmovanci za golding Slovnskge Laško, ima pa polega slovenske države in posebej našo pivo skodelovanje.",
              specs: [{ key: "alcohol", value: "5.1%" }],
            },
          ]}
        />
      </div>
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
