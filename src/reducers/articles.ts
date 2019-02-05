import { ArticlesActions, ArticlesActionTypes, ArticlesState } from "../types/articles";

/**
 * 記事一覧取得 Reducer
 * @param state
 * @param action
 */
const getList = (
  state: ArticlesState = { articles: [], page: 0, tags: [] },
  action: ArticlesActions,
): ArticlesState => {
  switch (action.type) {
    case ArticlesActionTypes.GET_ARTICLES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default getList;
