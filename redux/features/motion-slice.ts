// motion 'slice' of the store
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
  value: MotionState
}
type MotionState = {
  pageRef: any
}
const initialState = {
  value: {
    pageRef: null,
  } as MotionState,
} as InitialState

export const motion = createSlice({
  name: "motion",
  initialState,
  reducers: {
    updatePageRef: (_, action: any) => { 
      // "_" is "state" prop removed shorthand for lack of use
      return {
        value: {
          pageRef: action,
        }
      }
    },
  }
})

export const { updatePageRef } = motion.actions
export default motion.reducer