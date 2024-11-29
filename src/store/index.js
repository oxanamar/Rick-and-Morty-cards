import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slice";
import { enableMapSet } from "immer";

// Enabled support for Map and Set in Immer
enableMapSet();

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export default store;
