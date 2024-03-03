import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryState {
  queries: string[];
}

const initialState: QueryState = {
  queries: [],
};

const queryImagesSlice = createSlice({
  name: "queryImages",
  initialState,
  reducers: {
    addQuery: (state, action: PayloadAction<string>) => {
      const query = action.payload;
      if (!state.queries.includes(query)) {
        state.queries.push(query);
      }
    },

    clearQueries: (state) => {
      state.queries = [];
    },
  },
});

export const { addQuery, clearQueries } = queryImagesSlice.actions;

export default queryImagesSlice.reducer;
