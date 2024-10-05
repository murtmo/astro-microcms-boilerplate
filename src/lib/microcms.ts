import type {
  ContentType,
  Content,
  ContentResponse,
  CategoryResponse,
} from "src/type.ts";

// SDK利用準備
import { createClient } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// APIの呼び出し
// A-a-1. 記事リスト - fetches blog contents from microCMS, filtered by type
export async function getContents(type: ContentType["type"]) {
  const response = await client.get<ContentResponse>({
    endpoint: "blogs",
    queries: {
      fields: "id,publishedAt,title,type,categories.id,categories.name,content",
      filters: `type[contains]${type}`,
      orders: "-publishedAt",
    },
  });
  return response.contents;
}
// A-a-2. 記事リスト - fetches blog contents from microCMS, filtered by type and category
export async function getContentsByCategory(
  type: ContentType["type"],
  categoryId: string,
) {
  const response = await client.get<ContentResponse>({
    endpoint: "blogs",
    queries: {
      fields: "id,publishedAt,title,type,categories.id,categories.name,content",
      filters: `type[contains]${type}[and]categories[contains]${categoryId}`,
      orders: "-publishedAt",
    },
  });
  return response.contents;
}
// A-b. 記事詳細　- fetches blog contents from microCMS, filtered by type and id
export async function getContentByID(type: ContentType["type"], id: string) {
  const response = await client.getList<Content>({
    endpoint: "blogs",
    queries: {
      fields: "id,publishedAt,title,type,categories.id,categories.name,content",
      filters: `type[contains]${type}[and]id[equals]${id}`,
      orders: "-publishedAt",
    },
  });
  return response.contents[0];
}

// B-a. カテゴリリスト - fetches category from microCMS
// All categories, including both news and blog types
export async function getCategories() {
  const response = await client.get<CategoryResponse>({
    endpoint: "categories",
    queries: { fields: "id,name" },
  });
  return response.contents;
}
