import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { useDispatch as useReduxDispatch } from "react-redux";

const store = configureStore({ reducer: rootReducer });

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.acceptDeps("./rootReducer", (newRootReducer) => {
    store.replaceReducer(newRootReducer.default);
  });
}

export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;
