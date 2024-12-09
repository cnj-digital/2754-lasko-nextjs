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
