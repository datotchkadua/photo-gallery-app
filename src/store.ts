import { configureStore } from "@reduxjs/toolkit";
import queryImagesReducer from "./features/queryImages/queryImagesSlice";
export const store = configureStore({
  reducer: {
    queryImages: queryImagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
