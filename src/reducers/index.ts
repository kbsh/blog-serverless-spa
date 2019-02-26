import { combineReducers } from "redux";
import { RootState } from "../types";
import article from "./article";
import articles from "./articles";

const rootReducer = combineReducers<RootState>({
  article,
  articles,
});

export default rootReducer;
