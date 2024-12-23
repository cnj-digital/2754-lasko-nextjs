import Container from "../Container";
import cx from "classnames";

type ArticleHeroProps = {
  title: string;
  date?: string;
  backgroundUrl: string;
};

export default function ArticleHero({
  title,
  date,
  backgroundUrl,
}: ArticleHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden max-w-8xl  mx-auto rounded-b-3xl"
      style={{ backgroundImage: "url('/bg-green.jpg')" }}
    >
      <div
        className={cx(
          "relative z-10 rounded-b-3xl  w-full overflow-hidden ",
          backgroundUrl ? "aspect-[0.56] lg:aspect-[2.14]" : " pt-48"
        )}
      >
        {backgroundUrl && (
          <img
            src={backgroundUrl}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )}

        <div className="absolute inset-0 bg-black/30" />

        <Container
          className={cx(
            "relative h-full w-full flex flex-col justify-end  items-start",
            backgroundUrl ? "pb-16 lg:pb-20" : "pb-10 lg:pb-16"
          )}
        >
          <h1 className="text-[40px] leading-tight md:text-[52px] font-bold text-white max-w-3xl font-neutraface text-balance">
            {title}
          </h1>
          {date && (
            <p className="text-white text-2xl mt-3 font-semibold">{date}</p>
          )}
        </Container>
      </div>
    </section>
  );
}
