import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slice";

const Store = new configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default Store;
