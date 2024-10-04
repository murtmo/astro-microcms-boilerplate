export type ContentType = {
  type: "blog" | "news";
};

export type CategoryData = {
  id: string;
  name: string;
};

export type Content = {
  id: string;
  title: string;
  categories: CategoryData[];
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
  categories: CategoryData[];
  publishedAt: string;
  content: string;
}
