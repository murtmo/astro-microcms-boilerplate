// util
import type { ContentType, CategoryData, PostData } from "src/type.ts";
import { getContents, getCategories } from "@lib/microcms";

// A. 特定の type 記事内で使用されているカテゴリーリストを返す
export async function fetchUsedCategoriesForContentType(
  type: ContentType["type"],
): Promise<CategoryData[]> {
  const allCategories = await getCategories();
  const postsData = await getContents(type);

  // Extract all category IDs from posts and remove duplicates
  const usedCategoryIds = new Set(
    postsData.flatMap((post: PostData) =>
      post.categories.map((category) => category.id),
    ),
  );

  // Filter allCategories to only include categories used in posts
  return allCategories.filter((category: CategoryData) =>
    usedCategoryIds.has(category.id),
  );
}
