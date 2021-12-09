import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async (queries) => {
    let URL = "https://opentdb.com/api.php?";
    if (queries.count.length > 0) {
      URL = URL.concat(`amount=${queries.count}`);
    }
    if (queries.category.length > 0) {
      URL = URL.concat(`&category=${queries.category}`);
    }
    if (queries.difficulty.length > 0) {
      URL = URL.concat(`&difficulty=${queries.difficulty}`);
    }
    if (queries.type.length > 0) {
      URL = URL.concat(`&type=${queries.type}`);
    }
    try {
      const questions = await axios.get(URL);
      return questions.data.results;
    } catch (error) {
      return error;
    }
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    status: null,
    error: null,
    score: 0,
  },
  reducers: {
    setScore: (state, action) => {
      state.score = state.score + 1;
    },
    setDefaultValues: (state) => {
      state.questions = [];
    },
  },
  extraReducers: {
    [getQuestions.pending]: (state) => {
      state.status = "loading";
    },
    [getQuestions.fulfilled]: (state, action) => {
      state.questions = action.payload;
      state.status = "success";
    },
    [getQuestions.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const { setScore, setDefaultValues } = questionsSlice.actions;

export default questionsSlice.reducer;
