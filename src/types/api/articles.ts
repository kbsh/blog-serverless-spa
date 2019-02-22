/**
 * 記事一覧取得API リクエスト型
 */
export type ArticlesApiRequest = {
  page: number;
  tags: number[];
};

/**
 * 記事一覧取得API レスポンス型
 */
export type ArticlesApiResponse = {
  // 記事ID
  id: number;
  // タイトル
  title: string;
  // タグ
  tags: Tag[];
  // 最終更新日時
  updatedAt: string;
};

/**
 * タグ情報
 */
export type Tag = {
  id: number;
  name: string;
};
