import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import restaurantsReducer from "./components/restaurants/redux/reducer";

export const store = configureStore({
  reducer: {
    // @ts-ignore
    restaurants: restaurantsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
