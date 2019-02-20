import { Tag } from "./articles";

/**
 * 記事詳細取得API リクエスト型
 */
export type ArticleApiRequest = {
  id: number;
};

/**
 * 記事詳細取得API レスポンス型
 */
export type ArticleApiResponse = {
  // タイトル
  title: string;
  // タグ
  tags: Tag[];
  // 最終更新日時
  updatedAt: string;
  // 本文
  body: string;
};
