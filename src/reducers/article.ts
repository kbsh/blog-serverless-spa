import { ArticleActions, ArticleActionTypes, ArticleState } from "../types/article";

/**
 * 記事詳細取得 Reducer
 * @param state
 * @param action
 */
const getArticle = (
  state: ArticleState = {
    id: 0,
    title: "",
    body: "",
    tags: [],
    updatedAt: "",
  },
  action: ArticleActions,
): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.GET_ARTICLE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default getArticle;
