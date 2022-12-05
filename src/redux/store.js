import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./controller/auth.slice";
import productsSlice from "./controller/products.slice";


export const store = configureStore({
  reducer: { auth: authSlice, products: productsSlice },
});
