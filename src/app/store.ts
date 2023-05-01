import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import applicationsReducer from "../features/applications/applicationsSlice";
import resourcesReducer from "../features/resources/resourcesSlice";

export const store = configureStore({
  reducer: {
    applications: applicationsReducer,
    resources: resourcesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
