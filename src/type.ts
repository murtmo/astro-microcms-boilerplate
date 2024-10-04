export type ContentType = {
  type: "blog" | "news";
};

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

export interface NewsPost {
  title: string;
  publishedAt: string;
  content: string;
}
