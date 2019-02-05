import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { RootActions, RootState } from "../types";

const store = createStore<RootState, RootActions, {}, {}>(
  rootReducer,
  applyMiddleware(
    thunk,
  ),
);

export default store;
