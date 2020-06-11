import { combineReducers } from "redux";

const rootReducer = combineReducers({
  test: (s = {}) => s,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
