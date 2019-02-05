import { Action } from "redux";
import { ArticlesApiRequest, ArticlesApiResponse } from "./api/articles";

/**
 * 記事一覧取得Action 呼び出しパラメータ
 */
export type ArticlesParams = ArticlesApiRequest;

/**
 * 記事一覧取得 State
 */
export type ArticlesState = ArticlesParams & GetArticlesPayload;

/**
 * 記事一覧取得Action Action型
 */
export interface GetArticlesAction extends Action {
  type: ArticlesActionTypes.GET_ARTICLES;
  payload: GetArticlesPayload;
}

/**
 * 記事一覧取得Action Payload型
 */
type GetArticlesPayload = {
  articles: ArticlesApiResponse[];
};

/**
 * Articles Actions で扱う Action型
 */
export type ArticlesActions = GetArticlesAction;

/**
 * Articles Actions で扱う Action type
 */
export enum ArticlesActionTypes {
  GET_ARTICLES = "GET_ARTICLES",
}
