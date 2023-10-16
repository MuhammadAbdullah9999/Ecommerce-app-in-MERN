import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./index";
// import productSlice from "./productSlice";

export const store=configureStore({
    reducer:productReducer
})