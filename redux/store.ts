// all states and variables

import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import authReducer from "./features/auth-slice"

export const store = configureStore({
  // reducers take an action and reference a function to the state
  reducer: {
    authReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector