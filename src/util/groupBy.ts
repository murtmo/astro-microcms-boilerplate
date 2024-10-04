// util
import { formatDateByYM } from "./formatDate";

interface Content {
  publishedAt: string | Date;
}

// グループ化された結果の型定義
interface GroupedByYMContents {
  [yearMonth: string]: Content[];
}

// a. 年月にグルーピング
export const groupByYearMonth = (contents: Content[]): GroupedByYMContents => {
  return contents.reduce<GroupedByYMContents>((group, post) => {
    // 各コンテンツ項目 post の publishedAt プロパティから日付を取得し、
    // formatDateByYM 関数を使って年月の文字列に変換する
    const yearMonthString = formatDateByYM(new Date(post.publishedAt));

    // yearMonthString をキーとして、group オブジェクトに配列を作成または取得する
    (group[yearMonthString] = group[yearMonthString] || []).push(post);
    return group;
  }, {});
};
