import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../reducers/Reducer";

const Store = configureStore({
  reducer: Reducer,
});

export type appState = ReturnType<typeof Store.getState>
export default Store;
