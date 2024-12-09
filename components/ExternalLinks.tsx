import CardGreenHorizontal from "./Cards/GreenHorizontal";
import CardMedium from "./Cards/Medium";

type ExternalLinksProps = {
  title?: string;
  copy?: string;
  links: {
    image: string;
    url: string;
  }[];
  pageLinks?: {
    title: string;
    image: string;
    url: string;
  }[];
};

export default function ExternalLinks({
  copy,
  title,
  links,
  pageLinks,
}: ExternalLinksProps) {
  return (
    <section className=" max-w-7xl mx-auto py-20">
      {title && (
        <h2 className="text-5xl font-neutraface font-black  leading-tight text-green-800">
          {title}
        </h2>
      )}
      {copy && (
        <p className=" text-black mt-3 mb-10  font-semibold text-xl">{copy}</p>
      )}
      {pageLinks && pageLinks.length > 0 && (
        <div className="grid lg:grid-cols-2 gap-10 mb-10 ">
          {pageLinks.map((link, i) => (
            <CardGreenHorizontal
              key={i}
              url={link.url}
              image={link.image}
              title={link.title}
            />
          ))}
        </div>
      )}
      <div className="grid lg:grid-cols-3 gap-8">
        {links.map((link, i) => (
          <CardMedium key={i} image={link.image} url={link.url} />
        ))}
      </div>
    </section>
  );
}
