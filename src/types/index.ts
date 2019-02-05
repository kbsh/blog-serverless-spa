import { ArticlesActions, ArticlesState } from "./articles";

export type RootState = {
  articles: ArticlesState;
};

export type RootActions = ArticlesActions;
