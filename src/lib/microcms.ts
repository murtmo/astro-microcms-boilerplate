import type { ContentType, Content, ContentResponse } from "src/type.ts";

// SDK利用準備
import { createClient } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// APIの呼び出し
export async function getContents(type: ContentType["type"]) {
  const response = await client.get<ContentResponse>({
    endpoint: "blogs",
    queries: { filters: `type[contains]${type}` },
  });
  return response.contents;
}
export async function getContentByID(type: ContentType["type"], id: string) {
  const response = await client.getList<Content>({
    endpoint: "blogs",
    queries: { filters: `type[contains]${type}[and]id[equals]${id}` },
  });
  return response.contents[0];
}
