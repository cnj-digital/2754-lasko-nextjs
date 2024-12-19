import BuilderComponent from "@/components/Article/Builder";
import ArticleHero from "@/components/Article/Hero";
import Container from "@/components/Container";

function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("sl-SI", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}

export default async function Article({
  title,
  date,
  featured_image,
  builder_items,
}: any) {
  return (
    <div className="">
      <ArticleHero
        title={title}
        backgroundUrl={featured_image?.permalink}
        date={formatDate(date)}
      />
      <Container className=" mx-auto">
        {builder_items.map((content: any, i: number) => (
          <BuilderComponent key={i} type={content.type} data={content} />
        ))}
      </Container>
    </div>
  );
}
