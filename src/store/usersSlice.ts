import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IUser} from "../types";

export interface CounterState {
  users: IUser[] | any[]
  username: string
}

const initialState: CounterState = {
  users: [],
  username: '',
}

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[] | any>) => {
      state.users = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
  },
})

export default usersSlice.reducer
