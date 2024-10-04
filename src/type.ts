export type ContentType = {
  type: "blog" | "news";
};

export type Content = {
  id: string;
  title: string;
  content: string;
  type: ContentType["type"];
};
export type ContentResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Content[];
};

export interface PostListData {
  id: string;
  title: string;
}

export interface PostData {
  title: string;
  publishedAt: string;
  content: string;
}
