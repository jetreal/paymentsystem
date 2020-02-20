
import {
  SUBMIT_LOGIN,
  ON_LOGIN_ERROR,
  LOGOUT, SUBMIT_REGISTER,
  ON_REGISTER_ERROR,
  CLEAR_FORM_WARNING
} from "../types";
import { getToken, registration } from "../../api/api";
import { reset } from 'redux-form';
import { saveState } from "../localStorage";

export function onClearFromWarning() {
  return {
    type: CLEAR_FORM_WARNING
  }
}

export function onLogout() {
  return {
    type: LOGOUT
  }
}

export function onSubmitLogin(loginData) {
  return {
    type: SUBMIT_LOGIN,
    loginData
  }
}

export function onLoginError(errorData) {
  return {
    type: ON_LOGIN_ERROR,
    errorData
  }
}

export const onSubmitLoginAsync = (loginData) => async (dispatch) => {
  try {
    const response = await getToken(loginData)
    console.log(response)
    saveState(response.data.id_token)
    dispatch(onSubmitLogin(response))
    reset('login');
  } catch (e) {
    dispatch(onLoginError(e.message.slice(-3)))
    // dispatch(reset('login'));
  }
}

/////////////////////////////////////////
export function onSubmitRegister(servResponce) {
  return {
    type: SUBMIT_REGISTER,
    servResponce
  }
}
export function onSubmitError(errorData) {
  return {
    type: ON_REGISTER_ERROR,
    errorData
  }
}

export const onSubmitRegisterAsync = (registerData) => async (dispatch) => {
  try {
    const response = await registration(registerData)
    console.log(response)

    dispatch(onSubmitRegister(response))
    // reset('register');
  } catch (e) {
    console.log(e)
    // dispatch(onSubmitError(response))
    // dispatch(onLoginError(e.message.slice(-3)))
    // reset('login');
  }
}