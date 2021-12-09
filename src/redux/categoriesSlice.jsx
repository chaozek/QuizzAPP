import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const categories = await axios.get(
        "https://opentdb.com/api_category.php"
      );
      return categories.data.trivia_categories;
    } catch (error) {
      return error;
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.status = "loading";
    },
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.status = "success";
    },
    [getCategories.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
