import type { Metadata } from "next";
import {
  fetchArticles,
  fetchPage,
  fetchPageBlueprint,
  fetchRoutes,
  fetchSeo,
  fetchMediaItem,
} from "@/api/fetch";
import Archive from "@/components/Pages/Archive";
import Article from "@/components/Pages/Article";
import BuilderPage from "@/components/Pages/Builder";
import History from "@/components/Pages/History";
import Home from "@/components/Pages/Home";
import Product from "@/components/Pages/Product";
import Support from "@/components/Pages/Support";
import Cortina from "@/components/Pages/Cortina";
import MediaItem from "@/components/Pages/MediaItem";
import Event from "@/components/Pages/Event";
import { languages } from "@/data/general";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  const lang = slug[0];
  const uri = slug.slice(1).length ? `/${slug.slice(1).join("/")}` : "/";

  const data = await fetchSeo(uri, lang);

  if (!data) return {};

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

    // Fetch and transform media items
    const { fetchMediaItems, fetchEvents } = await import("@/api/fetch");
    const mediaItemsRes = await fetchMediaItems("si");
    const mediaItems = languages.flatMap(() =>
      mediaItemsRes.map((item: any) => ({
        slug: ["si", "medijske-vsebine", item.slug],
      }))
    );

    // Fetch and transform events
    const eventsRes = await fetchEvents("si");
    const events = eventsRes.map((event: any) => ({
      slug: event.url.replace(/^\//, "").split("/"),
    }));

    const allRoutesAndArticles = [...flattenedRoutes, ...articles, ...mediaItems, ...events];

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

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const lang = slug[0];
  const uri = slug.slice(1).length ? `/${slug.slice(1).join("/")}` : "/";

  // Check if this is a media item route
  const isMediaItem = slug.length === 3 && slug[1] === 'medijske-vsebine';
  
  let blueprint;
  if (isMediaItem) {
    blueprint = 'medijske_vsebine';
  } else {
    blueprint = await getPageData(lang, uri);
  }
  
  let articles = [];
  
  if (!blueprint) {
    //console.log('No blueprint found, returning null');
    return null;
  }
  //console.log('Blueprint for URI:', uri, '→', blueprint);

  if (blueprint === "archive" || blueprint === "page") {
    const articlesRes = await fetchArticles(lang);
    articles = articlesRes;
  }

  // For media items, use slug instead of URI
  let data;
  if (isMediaItem) {
    const mediaSlug = slug[2];
    //console.log('Fetching media item by slug:', mediaSlug);
    data = await fetchMediaItem(mediaSlug, lang);
  } else {
    data = await fetchPage(uri, lang, blueprint);
  }

  const blueprints = {
    page: Home,
    product: Product,
    archive: Archive,
    history: History,
    support: Support,
    article: Article,
    builder: BuilderPage,
    cortina: Cortina,
    medijske_vsebine: MediaItem,
    event: Event,
  };

  const Component = blueprints[blueprint as "page"];

  if (Component)
    return (
      <>
        <Component {...data} articles={articles} />
      </>
    );
  else return <div>Not found - Blueprint: {blueprint}</div>;
}

export const dynamicParams = false;
