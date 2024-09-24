//SDK利用準備
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Content = {
  id: string;
  title: string;
  content: string;
  type: ("blog" | "news")[];
};
export type ContentResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Content[];
};

//APIの呼び出し
export async function getContents(type: "blog" | "news") {
  const response = await client.get<ContentResponse>({
    endpoint: "blogs",
    queries: { filters: `type[contains]${type}` },
  });
  return response.contents;
}
export async function getContentByID(type: "blog" | "news", id: string) {
  const response = await client.getList<Content>({
    endpoint: "blogs",
    queries: { filters: `type[contains]${type}[and]id[equals]${id}` },
  });
  return response.contents[0];
}
