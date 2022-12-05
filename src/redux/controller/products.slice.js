import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../api/contants";
import callApi from "../../api/http.api";

export const fetchAllProducts = createAsyncThunk(
  "products/fetch_all_products",
  async (params, thunkApi) => {
    console.log(params.slice(10));

    const allProducts = await callApi(
      params === "" || params.slice(10) === 'all'
        ? PRODUCTS.GET_ALL
        : `${PRODUCTS.GET_ALL_CATEGORY}/${params.slice(10)}`
    );

    return allProducts;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    allProducts: [],
    error: "",
  },
  reducers: {
    addAllProducts: (state, action) => {
      state.products.push(action.payload);
    },
    getSingleCategories: (state, action) => {},
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state, action) => {
      console.log("pending");
      state.loading = true;
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.allProducts = action.payload;
    },
    [fetchAllProducts.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask } = productsSlice.actions;
export default productsSlice.reducer;
