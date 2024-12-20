import {
  fetchArticles,
  fetchPage,
  fetchPageBlueprint,
  fetchRoutes,
} from "@/api/fetch";
import Archive from "@/components/Pages/Archive";
import Article from "@/components/Pages/Article";
import BuilderPage from "@/components/Pages/Builder";
import History from "@/components/Pages/History";
import Home from "@/components/Pages/Home";
import Product from "@/components/Pages/Product";
import Support from "@/components/Pages/Support";

export async function generateStaticParams() {
  try {
    const languages = ["si", "en"];

    // Fetch routes for each language
    const routePromises = languages.map(async (lang) => {
      const routes = await fetchRoutes(lang);
      // Transform routes to include language
      return routes.map((route: any) => ({
        slug: route?.url?.replace(/^\//, "").split("/") ?? ["si"], // Remove leading slash
      }));
    });

    const allRoutes = await Promise.all(routePromises);
    const flattenedRoutes = allRoutes.flat();

    // Fetch and transform articles
    const articlesRes = await fetchArticles();
    const articles = languages.flatMap(() =>
      articlesRes.map((article: any) => ({
        slug: article.url.replace(/^\//, "").split("/"), // Include 'articles' in the path
      }))
    );

    const allRoutesAndArticles = [...flattenedRoutes, ...articles];

    return allRoutesAndArticles;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

async function getPageData(lang: string, uri: string) {
  const blueprint = await fetchPageBlueprint(uri, lang);

  return blueprint;
}

export default async function Page({ params }: any) {
  const { slug } = await params;

  const lang = slug[0];
  const uri = slug.slice(1).length ? `/${slug.slice(1).join("/")}` : "/";

  const blueprint = await getPageData(lang, uri);
  let articles = [];

  if (blueprint === "archive" || blueprint === "page") {
    const articlesRes = await fetchArticles(lang);
    articles = articlesRes;
  }

  const data = await fetchPage(uri, lang, blueprint);

  const blueprints = {
    page: Home,
    product: Product,
    archive: Archive,
    history: History,
    support: Support,
    article: Article,
    builder: BuilderPage,
  };

  const Component = blueprints[blueprint as "page"];

  if (Component)
    return (
      <div>
        <Component {...data} articles={articles} />
      </div>
    );
  else return <div>Not found</div>;
}

export const dynamicParams = false;
