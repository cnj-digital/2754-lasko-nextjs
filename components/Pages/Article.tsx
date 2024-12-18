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

export default async function Article({ article }: any) {
  return (
    <div className="">
      <ArticleHero
        title={article.title}
        backgroundUrl={article.image}
        date={formatDate(article.date)}
      />
      <Container className=" mx-auto">
        {article.items.map((content: any, i: number) => (
          <BuilderComponent key={i} type={content.type} data={content} />
        ))}
      </Container>
    </div>
  );
}
