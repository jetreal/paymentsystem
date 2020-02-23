import {
  FETCH_USER_DATA,
  LOGOUT,
  ON_BUTTON_CREATE_TRANSACTION,
  ON_BUTTON_HISTORY_TRANSACTION,
  ON_GET_USERS,
  ON_CLEAR_RECIPIENT_LIST,
  SET_RECIPIENT_NAME
} from "../../types";
import { loadState } from "../../localStorage";
import { getLoggedUserInfo, getFilteredUserList } from "../../../api/api";

// import { getToken } from "../../api/api";

// import { loadState } from "../localStorage";

export function setRecipientName(recipientName) {
  return {
    type: SET_RECIPIENT_NAME,
    name: recipientName.username
  }
}

export function onClearRecipient() {
  return {
    type: ON_CLEAR_RECIPIENT_LIST
  }
}

function onGetUsers(recipients) {
  return {
    type: ON_GET_USERS,
    recipients
  }
}

export const onFetchFilterRecipientAsync = (filteredChar) => async (dispatch) => {
  console.log(filteredChar.username)
  if (filteredChar.username != null) {
    try {
      const token = await loadState()
      const filteredList = await getFilteredUserList(filteredChar, token)
      dispatch(onGetUsers(filteredList))
    } catch (e) {
      console.log(e)
      // dispatch(onFetchUserDataError());
    }

  }
}




export function onButtonCreateTransaction() {
  return {
    type: ON_BUTTON_CREATE_TRANSACTION
  }
}

export function onButtonHistoryTransaction() {
  return {
    type: ON_BUTTON_HISTORY_TRANSACTION
  }
}

function onFetchUserData(userObj) {
  return {
    type: FETCH_USER_DATA,
    userObj
  }
}
function onFetchUserDataError() {
  return {
    type: LOGOUT
  }
}

export const onFetchCurrentUserDataAsync = () => async (dispatch) => {
  try {
    const token = await loadState()
    const userData = await getLoggedUserInfo(token)
    dispatch(onFetchUserData(userData))
  } catch (e) {
    dispatch(onFetchUserDataError());
  }
}