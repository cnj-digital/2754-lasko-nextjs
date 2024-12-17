import { fetchArticles, fetchSingleArticle } from "@/api/fetch";
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

export async function generateStaticParams() {
  try {
    const articles = await fetchArticles();

    return articles.map((article: any) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function Article({ params }: any) {
  const { slug } = await params;
  const article = await fetchSingleArticle(slug);

  console.log("article", article);

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

export const dynamicParams = false;
