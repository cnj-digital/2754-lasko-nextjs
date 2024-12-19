import {
  fetchArticles,
  fetchPage,
  fetchPageBlueprint,
  fetchRoutes,
} from "@/api/fetch";
import Archive from "@/components/Pages/Archive";
import Article from "@/components/Pages/Article";
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
        slug: route.url.replace(/^\//, "").split("/"), // Remove leading slash
      }));
    });

    const allRoutes = await Promise.all(routePromises);
    const flattenedRoutes = allRoutes.flat();

    // Fetch and transform articles
    const articlesRes = await fetchArticles();
    const articles = languages.flatMap((lang) =>
      articlesRes.map((article: any) => ({
        lang,
        blueprint: "article",
        slug: `clanek/${article.slug}`, // Include 'articles' in the path
      }))
    );

    const allRoutesAndArticles = [...flattenedRoutes, ...articles];

    console.log("allRoutesAndArticles", flattenedRoutes, allRoutesAndArticles);

    return flattenedRoutes;
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

  console.log("slug", slug);

  const lang = slug[0];
  const uri = slug[1] ? `/${slug[1]}` : "/";

  const blueprint = await getPageData(lang, uri);
  let articles = [];

  if (blueprint === "archive" || blueprint === "page") {
    const articlesRes = await fetchArticles();
    articles = articlesRes;
  }

  const data = await fetchPage(uri, lang, blueprint);

  console.log("data", data, blueprint);

  const blueprints = {
    page: Home,
    product: Product,
    archive: Archive,
    history: History,
    support: Support,
    article: Article,
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
