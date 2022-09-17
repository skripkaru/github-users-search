import {bindActionCreators} from "@reduxjs/toolkit";
import {useAppDispatch} from "./useAppDispatch";
import {usersSlice} from "../store/usersSlice";

const actions = {
  ...usersSlice.actions
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
