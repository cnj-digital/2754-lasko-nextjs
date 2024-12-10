import ContentGrid from "@/components/ContentGrid";
import HeroImage from "@/components/HeroImage";

export default function Zgodba() {
  return (
    <div>
      <HeroImage
        title="Leto 1825"
        copy="Charles Darwin se vpiše na študij medicine, Hans Orsted kot prvi proizvede aluminij, predsednik ZDA postane John Quincy Adams, v Laškem pa se prične zgodba o pivu, ki ga danes pozna sleherni Slovenec, svoje mesto pa je našel tudi med ljubitelji piva po vsem svetu."
        buttons={[
          {
            title: "Zgodovina",
            url: "#zgodovina",
          },
          {
            title: "Kakovost",
            url: "#kakovost",
          },
          {
            title: "Varjenje piva",
            url: "#varjenje",
          },
        ]}
        image="/placeholders/zgodba.png"
      />
      <ContentGrid
        title="Zgodovina"
        sectionTitle="Ključni trenutki"
        items={[
          {
            image: "/placeholders/trenutek.png",
            title: "Prva pivovarna",
            copy: "Pred več kot 180 leti je Franz Geyer postavil prvo pivovarno v Laškem, kjer je varil kameno pivo in tako postal pionir pivovarstva pri nas.",
          },
          {
            image: "/placeholders/trenutek.png",
            title: "Prva pivovarna",
            copy: "Pred več kot 180 leti je Franz Geyer postavil prvo pivovarno v Laškem, kjer je varil kameno pivo in tako postal pionir pivovarstva pri nas.",
          },
          {
            image: "/placeholders/trenutek.png",
            title: "Prva pivovarna",
            copy: "Pred več kot 180 leti je Franz Geyer postavil prvo pivovarno v Laškem, kjer je varil kameno pivo in tako postal pionir pivovarstva pri nas.",
          },
          {
            image: "/placeholders/trenutek.png",
            title: "Prva pivovarna",
            copy: "Pred več kot 180 leti je Franz Geyer postavil prvo pivovarno v Laškem, kjer je varil kameno pivo in tako postal pionir pivovarstva pri nas.",
          },
        ]}
      />
    </div>
  );
}
