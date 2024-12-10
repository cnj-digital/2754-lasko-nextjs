import CardsCta from "@/components/CardsCta";
import HeroSlider from "@/components/HeroSlider";

export default function Pivo() {
  return (
    <div>
      <HeroSlider />
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
