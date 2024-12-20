import request from "graphql-request";
import {
  articleQuery,
  articlesQuery,
  mapArticle,
  mapArticles,
} from "./queries/article";
import { homepageQuery } from "./queries/homepage";
import { pageQuery, routesQuery } from "./queries/routes";
import { productQuery } from "./queries/product";
import { historyQuery } from "./queries/history";
import { supportQuery } from "./queries/support";
import { archiveQuery } from "./queries/archive";
import { builderQuery } from "./queries/builder";
import { footerQuery, navigationQuery } from "./queries/navigation";
import { seoQuery } from "./queries/seo";

const apiUrl = process.env.API_URL ?? "";

export async function fetchSingleArticle(slug: string) {
  const res: any = await request(apiUrl, articleQuery, { slug });
  return mapArticle(res.entry);
}

export async function fetchArticles(site?: string) {
  const res: any = await request(apiUrl, articlesQuery, { site });
  return mapArticles(res.entries.data);
}

export async function fetchNavigation(site: string) {
  const res: any = await request(apiUrl, navigationQuery, { site });
  return res.nav.tree;
}

export async function fetchFooter(site: string) {
  const res: any = await request(apiUrl, footerQuery, { site });
  return res.nav.tree;
}

export async function fetchPageBlueprint(uri: string, site: string) {
  const res: any = await request(apiUrl, pageQuery, { uri, site });
  return res.entry.blueprint;
}

export async function fetchPage(uri: string, site: string, blueprint: "page") {
  const query = {
    page: homepageQuery,
    product: productQuery,
    history: historyQuery,
    support: supportQuery,
    archive: archiveQuery,
    builder: builderQuery,
    article: articleQuery,
  };

  const res: any = await request(apiUrl, query[blueprint], {
    uri,
    site,
  });

  return res.entry;
}

export async function fetchRoutes(site: string) {
  const res: any = await request(apiUrl, routesQuery, { site });
  return res.entries.data;
}

export async function fetchSeo(uri: string, site: string) {
  const res: any = await request(apiUrl, seoQuery, { uri, site });
  return res.entry;
}
