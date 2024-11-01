// authentication 'slice' of the store
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
  value: AuthState
}
type AuthState = {
  isAuth: boolean
  isModerator: boolean
  uid: string
  username: string
}
const initialState = {
  value: {
    isAuth: false,
    isModerator: false,
    uid: "",
    username: "",
  } as AuthState,
} as InitialState

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (_, action: PayloadAction<string>) => { 
      // "_" is "state" prop removed shorthand for lack of use
      return {
        value: {
          isAuth: true,
          isModerator: false,
          uid: "generate an id",
          username: action.payload,
        }
      }
    },
    logOut: () => {
      return initialState
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator
    }
  }
})

export const { logIn, logOut, toggleModerator } = auth.actions
export default auth.reducer