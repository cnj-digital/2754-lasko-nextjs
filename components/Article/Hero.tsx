import Container from "../Container";

type ArticleHeroProps = {
  title: string;
  date: string;
  backgroundUrl: string;
};

export default function ArticleHero({
  title,
  date,
  backgroundUrl,
}: ArticleHeroProps) {
  return (
    <section className="relative w-full overflow-hidden max-w-8xl  mx-auto">
      <div className="relative z-10 rounded-b-3xl aspect-[0.56] lg:aspect-[2.14] w-full overflow-hidden ">
        <img
          src={backgroundUrl}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/30" />

        <Container className="relative h-full w-full flex flex-col justify-end pb-16 lg:pb-20 items-start">
          <h1 className="text-[40px] leading-tight md:text-[52px] font-bold text-white max-w-3xl font-neutraface text-balance">
            {title}
          </h1>
          <p className="text-white text-2xl mt-3 font-semibold">{date}</p>
        </Container>
      </div>
    </section>
  );
}
