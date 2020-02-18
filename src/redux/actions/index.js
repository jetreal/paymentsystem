
import { SUBMIT_LOGIN } from "../types";
import { getToken } from "../../api/api";
import { reset } from 'redux-form';


export function onSubmitLogin(loginData) {
  console.log(loginData)
  return {
      type: SUBMIT_LOGIN,
      loginData
  }
}

export const onSubmitLoginAsync = (loginData) => async (dispatch) => {
  try {
    const response = await getToken(loginData)
    console.log(response)
    dispatch(onSubmitLogin(response, loginData))
    dispatch(reset('login'));
  } catch (e) {
    // dispatch(reset('login'));
    console.log(e)
  }
}