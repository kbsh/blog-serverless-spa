import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { RootActions, RootState } from "../types";
import { ArticlesApiResponse } from "../types/api/articles";
import { ArticlesActionTypes, ArticlesParams } from "../types/articles";

/**
 * 記事一覧取得 Action
 * @param params
 */
export const getArticles = (params: ArticlesParams): ThunkAction<void, RootState, undefined, RootActions> => {
  return async (dispatch: Dispatch<RootActions>) => {
    const url = "/api/v1/articles";
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
    });
  };
};
