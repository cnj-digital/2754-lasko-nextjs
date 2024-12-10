import ContentGrid from "@/components/ContentGrid";
import ContentGridBackground from "@/components/ContentGridBackground";
import HeroImage from "@/components/HeroImage";
import HistoryTimeline from "@/components/HistoryTimeline";
import ImageSlider from "@/components/ImageSlider";
import InfoBanner from "@/components/InfoBanner";
import VideoGrid from "@/components/VideoGrid";

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
      <InfoBanner copy=" Pot od majhne obrtne pivovarne do današnjega milijona pretočenih hektolitrov letno je bila polna izzivov, vzponov, padcev in ne moremo mimo dejstva, da bi bila usoda pivovarne brez zavzetosti Laščanov ter mesta Laško precej drugačna." />

      <HistoryTimeline
        timeline={[
          {
            year: 1825,
            events: [
              {
                title: "Odprtje prve pivovarne",
                description: "",
                image: "barrel-icon",
              },
              {
                title: "Odprtje prve pivovarne",
                description: "",
                image: "barrel-icon",
              },
            ],
          },
          {
            year: 1835,
            events: [
              {
                title: "Novi lastnik ponese pivo v tuje kraje",
                description: "",
                image: "export-icon",
              },
              {
                title: "Primer z večimi vnosi",
                description:
                  "Višina celotnega modula se prilagodi letu z največ vnosi",
                image: "document-icon",
              },
              {
                title: "Tako poskrbimo da se ob premikanju med letnica",
                description: "stran ne razteguje in krči",
                image: "hourglass-icon",
              },
            ],
          },
          {
            year: 1867,
            events: [
              {
                title: "Prenova pivovarne",
                description: "null",
                image: "brewery-icon",
              },
            ],
          },
          {
            year: 1889,
            events: [
              {
                title: "Simon Kukec, oče Laškega piva",
                description: "null",
                image: "beer-mug-icon",
              },
            ],
          },
          {
            year: 1900,
            events: [
              {
                title: "Začetek industrijskega",
                description: "Prehod na industrijsko proizvodnjo",
                image: "factory-icon",
              },
            ],
          },
          {
            year: 1964,
            events: [
              {
                title: "Posodobitev Proizvodnje",
                description: "Modernizacija proizvodnih procesov",
                image: "modern-factory-icon",
              },
            ],
          },
        ]}
      />

      <InfoBanner copy="Kljub številnim spremembam je pivo iz Pivovarne Laško ohranilo svoje prvotno sporočilo, v vsakem požirku piva, ki steče po grlu, pa so ujeta desetletja izkušenj, truda in ponosa." />

      <ImageSlider
        title="Desetletja ikoničnih oglasov"
        images={[
          {
            description:
              "LAŠKO PIVO, 1963, lahko svetlo pivo s stopnjo alkohola 3 % in 10 % ekstraktom. Polnili smo ga le tri mesece.",
            url: "/placeholders/label.png",
          },
          {
            description:
              "LAŠKO PIVO, 1963, lahko svetlo pivo s stopnjo alkohola 3 % in 10 % ekstraktom. Polnili smo ga le tri mesece.",
            url: "/placeholders/label.png",
          },
          {
            description:
              "LAŠKO PIVO, 1963, lahko svetlo pivo s stopnjo alkohola 3 % in 10 % ekstraktom. Polnili smo ga le tri mesece.",
            url: "/placeholders/label.png",
          },
          {
            description:
              "LAŠKO PIVO, 1963, lahko svetlo pivo s stopnjo alkohola 3 % in 10 % ekstraktom. Polnili smo ga le tri mesece.",
            url: "/placeholders/label.png",
          },
          {
            description:
              "LAŠKO PIVO, 1963, lahko svetlo pivo s stopnjo alkohola 3 % in 10 % ekstraktom. Polnili smo ga le tri mesece.",
            url: "/placeholders/label.png",
          },
        ]}
      />

      <VideoGrid
        title="Desetletja ikoničnih oglasov "
        videos={[
          {
            title: "Laško Pivo",
            videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
          },
          {
            title: "Laško Pivo",
            videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
          },
          {
            title: "Laško Pivo",
            videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
          },
        ]}
      />

      <ContentGridBackground
        title="Kakovost"
        sectionCopy="Kakovost je od nekdaj na prvem mestu, zato pazljivo izbiramo in uporabljamo le najboljše sestavine. Začne se pri vodi, ki mora biti kakovostna, saj je ključnega pomena za karakter in kakovost piva. Ena od pomembnejših sestavin je tudi slad, ki ga pridobivamo iz skrbno izbranih sort ječmena. Značilno grenčico in aromo pivu dodajo kombinacije različnih sort hmelja, za alkoholno vrenje pa poskrbi pivski kvas."
        sectionTitle="Vrhunske sestavine in desetletja izkušenj zagotavljajo le najboljše"
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
