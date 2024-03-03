import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryState {
  queries: string[];
}

const initialState: QueryState = {
  queries: ["0"],
};

const queryImagesSlice = createSlice({
  name: "queryImages",
  initialState,
  reducers: {
    addQuery: (state, action: PayloadAction<string>) => {
      state.queries.push(action.payload);
    },

    clearQueries: (state) => {
      state.queries = [];
    },
  },
});

export const { addQuery, clearQueries } = queryImagesSlice.actions;

export default queryImagesSlice.reducer;
