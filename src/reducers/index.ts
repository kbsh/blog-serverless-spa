import { combineReducers } from "redux";
import { RootState } from "../types";
import articles from "./articles";

const rootReducer = combineReducers<RootState>({
  articles,
});

export default rootReducer;
