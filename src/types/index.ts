import { ArticleActions, ArticleState } from "./article";
import { ArticlesActions, ArticlesState } from "./articles";

export type RootState = {
  article: ArticleState;
  articles: ArticlesState;
};

export type RootActions = ArticleActions & ArticlesActions;
