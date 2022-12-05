import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import callApi from "../../api/http.api";

export const userLogin = createAsyncThunk(
  "auth/user_login",
  async (params, thunkApi) => {
    console.log(params);

    const user = await callApi("auth/login", "POST", {
      username: params.username,
      password: params.password,
    });

    return user;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    token: "",
    error: "",
  },

  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.allProducts = action.payload;
    },
    [userLogin.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask } = authSlice.actions;
export default authSlice.reducer;
