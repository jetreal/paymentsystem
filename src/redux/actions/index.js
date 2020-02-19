
import { SUBMIT_LOGIN, ON_LOGIN_ERROR } from "../types";
import { getToken } from "../../api/api";
import { reset } from 'redux-form';
import { saveState } from "../localStorage";


export function onSubmitLogin(loginData) {
  // console.log(loginData.status)
  return {
      type: SUBMIT_LOGIN,
      loginData
    }
  }


export const onSubmitLoginAsync = (loginData) => async (dispatch) => {
  try {
    const response = await getToken(loginData)
    console.log(response.data.id_token)
    saveState(response.data.id_token)
    dispatch(onSubmitLogin(response))
    dispatch(reset('login'));
  } catch (e) {
    dispatch(onLoginError(e.message.slice(-3)))
    // dispatch(reset('login'));

  }
}


export function onLoginError(errorData) {

  return {
      type: ON_LOGIN_ERROR,
      errorData
    }
  }