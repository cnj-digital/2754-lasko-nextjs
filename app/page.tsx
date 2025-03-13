import type { Metadata } from "next";
import {
  fetchArticles,
  fetchFooter,
  fetchNavigation,
  fetchPage,
  fetchPageBlueprint,
  fetchRoutes,
  fetchSeo,
} from "@/api/fetch";
import Archive from "@/components/Pages/Archive";
import Article from "@/components/Pages/Article";
import BuilderPage from "@/components/Pages/Builder";
import History from "@/components/Pages/History";
import Home from "@/components/Pages/Home";
import Product from "@/components/Pages/Product";
import Support from "@/components/Pages/Support";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  // read route params

  const lang = "si";
  const uri = "/";

  const data = await fetchSeo(uri, lang);

  return {
    title: data.seotamic_meta.title ?? "Pivovarna Laško",
    description: data.seotamic_meta.description ?? "",
    robots: data.seotamic_meta.robots ?? "",
    alternates: {
      canonical: data.seotamic_meta.canonical ?? "",
    },
    openGraph: {
      type: "website",
      siteName: data.seotamic_social.site_name ?? "Pivovarna Laško",
      images: [data.seotamic_social.image ?? ""],
      title: data.seotamic_social.title ?? "Pivovarna Laško",
      description: data.seotamic_social.description ?? "",
    },
    twitter: {
      card: "summary_large_image",
      site: data.seotamic_social.site_name ?? "Pivovarna Laško",
      title: data.seotamic_social.title ?? "Pivovarna Laško",
      description: data.seotamic_social.description ?? "",
      images: [data.seotamic_social.image ?? ""],
    },
  };
}

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

export default async function Page() {
  const blueprint = await getPageData("si", "/");
  let articles = [];

  if (blueprint === "archive" || blueprint === "page") {
    const articlesRes = await fetchArticles("si");
    articles = articlesRes;
  }

  const data = await fetchPage("/", "si", blueprint);

  const navigation = await fetchNavigation("si");
  const footer = await fetchFooter("si");

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
      <>
        <Menu nav={navigation.map((item: any) => item.page)} />
        <main>
          <Component {...data} articles={articles} />
        </main>
        <Footer {...footer} />
      </>
    );
  else return <div>Not found</div>;
}

export const dynamicParams = false;
