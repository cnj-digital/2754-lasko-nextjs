import CardsCta from "@/components/CardsCta";
import ContentGrid from "@/components/ContentGrid";
import ContentGridBackground from "@/components/ContentGridBackground";
import HeroImage from "@/components/HeroImage";
import HistoryTimeline from "@/components/HistoryTimeline";
import ImageSlider from "@/components/ImageSlider";
import InfoBanner from "@/components/InfoBanner";
import InfoSlider from "@/components/InfoSlider";
import VideoGrid from "@/components/VideoGrid";

export default function History() {
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
                image: "/placeholders/news.png",
              },
              {
                title: "Odprtje prve pivovarne",
                description: "",
                image: "/placeholders/news.png",
              },
            ],
          },
          {
            year: 1835,
            events: [
              {
                title: "Novi lastnik ponese pivo v tuje kraje",
                description: "",
                image: "/placeholders/news.png",
              },
              {
                title: "Primer z večimi vnosi",
                description:
                  "Višina celotnega modula se prilagodi letu z največ vnosi",
                image: "/placeholders/news.png",
              },
              {
                title: "Tako poskrbimo da se ob premikanju med letnica",
                description: "stran ne razteguje in krči",
                image: "/placeholders/news.png",
              },
            ],
          },
          {
            year: 1867,
            events: [
              {
                title: "Prenova pivovarne",
                description: "null",
                image: "/placeholders/news.png",
              },
            ],
          },
          {
            year: 1889,
            events: [
              {
                title: "Simon Kukec, oče Laškega piva",
                description: "null",
                image: "/placeholders/news.png",
              },
            ],
          },
          {
            year: 1900,
            events: [
              {
                title: "Začetek industrijskega",
                description: "Prehod na industrijsko proizvodnjo",
                image: "/placeholders/news.png",
              },
            ],
          },
          {
            year: 1964,
            events: [
              {
                title: "Posodobitev Proizvodnje",
                description: "Modernizacija proizvodnih procesov",
                image: "/placeholders/news.png",
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
            videoUrl:
              "https://www.youtube.com/watch?v=j8Vusneryxs&ab_channel=La%C5%A1ko",
          },
          {
            title: "Laško Pivo",
            videoUrl:
              "https://www.youtube.com/watch?v=j8Vusneryxs&ab_channel=La%C5%A1ko",
          },
          {
            title: "Laško Pivo",
            videoUrl:
              "https://www.youtube.com/watch?v=j8Vusneryxs&ab_channel=La%C5%A1ko",
          },
        ]}
      />

      <ContentGridBackground
        title="Kakovost"
        sections={[
          {
            type: "horizontal",
            title:
              "Vrhunske sestavine in desetletja izkušenj zagotavljajo le najboljše pivo",
            copy: "Kakovost je od nekdaj na prvem mestu, zato pazljivo izbiramo in uporabljamo le najboljše sestavine. Začne se pri vodi, ki mora biti kakovostna, saj je ključnega pomena za karakter in kakovost piva. Ena od pomembnejših sestavin je tudi slad, ki ga pridobivamo iz skrbno izbranih sort ječmena. Značilno grenčico in aromo pivu dodajo kombinacije različnih sort hmelja, za alkoholno vrenje pa poskrbi pivski kvas.",
            items: [
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
            ],
          },
          {
            type: "vertical",
            title: "Pivovarska zaveza",
            copy: "Časi se sicer spreminjajo, vse hitreje in vse bolj. A pivovarstvo, tisto, ki spoštuje primarno znanje, tisto, ki pivo časti kot naravno živilo, se pravi tisto žlahtno pivovarstvo, ki ga goji Pivovarna Laško, ob vsem upoštevanju napredka prisega na starodavno izročilo mojstrov pivovarjev:",
            items: [
              {
                title: "Tehnologija je biblija",
                copy: "Rojstni list - vsako pivo ima do potankosti predpisano celotno pot od varjenja, prek alkoholnega vrenja, zorenja do polnjenja. Laški postopek zagotavlja zdaj že pregovorno kakovost. Tradicionalna receptura - ič hitenja in pospeševanja, nič skrajševanja postopkov varjenja, alkoholnega vretja in zorenja. Laško pivo zori najmanj 3 do 4 tedne.",
                image: "/placeholders/trenutek.png",
              },
            ],
          },
        ]}
      />

      <InfoSlider
        title="Varjenje piva"
        copy="Proces nastanka piva od trenutka vnosa sestavin, do pakiranja končnega izdelka."
        slides={[
          {
            title: "1. Korak",
            copy: "Voda je osnovna sestavina piva, zato je ključnega pomena, da je kakovostna. Voda iz lastnega vodnega vira je osnova za vse vrste piva, ki jih varimo.",
            numbers: [1, 2, 4, 5],
          },
          {
            title: "2. Korak",
            copy: "Slad je druga najpomembnejša sestavina piva. Slad pridobivamo iz ječmena, ki ga namakamo, kalimo, sušimo in pražimo.",
            numbers: [6, 7, 8, 9],
          },
          {
            title: "3. Korak",
            copy: "Hmelj je tretja najpomembnejša sestavina piva. Hmelj dodajamo za aromo in grenčico, ki pivo naredita posebno.",
            numbers: [10, 11, 12],
          },
          {
            title: "4. Korak",
            copy: "Kvas je zadnja sestavina piva. Kvas je mikroorganizem, ki med alkoholnim vrenjem pretvarja sladkorje v alkohol in ogljikov dioksid.",
            numbers: [13, 14, 15, 16],
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
