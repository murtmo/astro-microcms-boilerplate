export type ContentType = {
  type: "blog" | "news";
};

export type CategoryData = {
  id: string;
  name: string;
};

export type ResponceLimit = number;

export type Content = {
  id: string;
  title: string;
  publishedAt: string;
  categories: CategoryData[];
  content: string;
  type: ContentType["type"];
};

export type ContentResponse = {
  totalCount: number;
  offset: number;
  limit: ResponceLimit;
  contents: Content[];
};

export type CategoryResponse = {
  totalCount: number;
  offset: number;
  limit: ResponceLimit;
  contents: CategoryData[];
};

export interface PostListData {
  id: string;
  title: string;
  publishedAt: string;
}

export interface PostData {
  title: string;
  categories: CategoryData[];
  publishedAt: string;
  content: string;
}

export interface GroupedByDateContents {
  [date: string]: PostListData[];
}
