import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { RootActions, RootState } from "../types";
import { ArticleApiResponse } from "../types/api/article";
import { ArticlesApiResponse } from "../types/api/articles";
import { ArticleActionTypes, ArticleParams } from "../types/article";
import { ArticlesActionTypes, ArticlesParams } from "../types/articles";

const URL_ROOT = "/api/v1/";

/**
 * 記事一覧取得 Action
 * @param params
 */
export const getArticles = (params: ArticlesParams): ThunkAction<void, RootState, undefined, RootActions> => {
  return async (dispatch: Dispatch<RootActions>) => {
    const url = `${URL_ROOT}articles`;
    const options = {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const articles: ArticlesApiResponse[] = await (await fetch(url, options)).json();

    return dispatch({
      type: ArticlesActionTypes.GET_ARTICLES,
      payload: { articles },
    } as RootActions);
  };
};

/**
 * 記事詳細取得 Action
 * @param params
 */
export const getArticle = (params: ArticleParams): ThunkAction<void, RootState, undefined, RootActions> => {
  return async (dispatch: Dispatch<RootActions>) => {
    const url = `${URL_ROOT}article/${params.id}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const article: ArticleApiResponse = await (await fetch(url, options)).json();

    return dispatch({
      type: ArticleActionTypes.GET_ARTICLE,
      payload: { ...article },
    } as RootActions);
  };
};
