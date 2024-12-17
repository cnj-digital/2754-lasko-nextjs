import request from "graphql-request";
import {
  articleQuery,
  articlesQuery,
  mapArticle,
  mapArticles,
} from "./queries/article";
import { homepageQuery } from "./queries/homepage";

const apiUrl = process.env.API_URL ?? "";

export async function fetchSingleArticle(slug: string) {
  const res: any = await request(apiUrl, articleQuery, { slug });
  return mapArticle(res.entry);
}

export async function fetchArticles() {
  const res: any = await request(apiUrl, articlesQuery);
  return mapArticles(res.entries.data);
}

export async function fetchHomepage() {
  const res: any = await request(apiUrl, homepageQuery);
  const articles: any = await request(apiUrl, articlesQuery);

  return { data: res.entry.data, articles: mapArticles(articles.entries.data) };
}
