import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import questionsReducer from "./questionsSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    questions: questionsReducer,
  },
});
