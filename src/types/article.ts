import { Action } from "redux";
import { ArticleApiRequest, ArticleApiResponse } from "./api/article";

/**
 * 記事詳細取得Action 呼び出しパラメータ
 */
export type ArticleParams = ArticleApiRequest;

/**
 * 記事詳細取得 State
 */
export type ArticleState = ArticleParams & GetArticlePayload;

/**
 * 記事詳細取得Action Action型
 */
export interface GetArticleAction extends Action {
  type: ArticleActionTypes.GET_ARTICLE;
  payload: GetArticlePayload;
}

/**
 * 記事詳細取得Action Payload型
 */
type GetArticlePayload = ArticleApiResponse;

/**
 * Article Actions で扱う Action型
 */
export type ArticleActions = GetArticleAction;

/**
 * Article Actions で扱う Action type
 */
export enum ArticleActionTypes {
  GET_ARTICLE = "GET_ARTICLE",
}
