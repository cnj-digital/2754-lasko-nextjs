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
import { translationsQuery } from "./queries/globals";
import { page404Query } from "./queries/404page";
import { ageVerificationQuery } from "./queries/ageVerification";

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

  let data = res.nav.tree;
  if (res.globalSet) data = { nav: data, globals: res.globalSet };
  return data;
}

export async function fetchPageBlueprint(uri: string, site: string) {
  const res: any = await request(apiUrl, pageQuery, { uri, site });

  if (res.entry) return res.entry.blueprint;
  else return null;
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
  let data = res.entry;
  if (res.globalSet) data = { ...data, globals: res.globalSet };

  return data;
}

export async function fetchRoutes(site: string) {
  const res: any = await request(apiUrl, routesQuery, { site });
  return res.entries.data;
}

export async function fetchSeo(uri: string, site: string) {
  const res: any = await request(apiUrl, seoQuery, { uri, site });
  return res.entry;
}

export async function fetchTranslations(site: string) {
  const res: any = await request(apiUrl, translationsQuery, { site });
  return res.globalSet;
}

export async function fetch404Page(site: string) {
  const res: any = await request(apiUrl, page404Query, { site });
  return res.globalSet;
}

export async function fetchAgeVerification(site: string) {
  const res: any = await request(apiUrl, ageVerificationQuery, { site });
  return res.globalSet;
}
