import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slice"

const Store = new configureStore({

    reducer:{
        name:themeSlice 
    }
});

export default Store