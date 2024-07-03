// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit"
import segmentReducer from "./segmentData/reducer"

export const store = configureStore({
  reducer: {
    segments: segmentReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
