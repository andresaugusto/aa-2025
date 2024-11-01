"use client"

import { useState } from "react"
import { logOut, logIn, toggleModerator } from "@/redux/features/auth-slice"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"

export default function LogIn() {
  
  const [ username, setUsername ] = useState("")

  const dispatch = useDispatch<AppDispatch>()
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)

  const onClickLogIn = () => {
    dispatch(logIn(username))
  }
  const onClickLogOut = () => {
    dispatch(logOut())
  }
  const onClickToggleModerator = () => {
    dispatch(toggleModerator())
  }

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} className="bg-transparent"/>
      <br />
      <button onClick={onClickLogIn}>Log In</button>
      <br />
      <button onClick={onClickLogOut}>Log Out</button>
      <br />
      {isAuth &&
        <>
          <button onClick={onClickToggleModerator}>Toggle Moderator Status</button>
          <br />
        </>
      }
    </div>
  )
}