import {
  FETCH_USER_DATA,
  LOGOUT,
  ON_BUTTON_CREATE_TRANSACTION,
  ON_BUTTON_HISTORY_TRANSACTION
} from "../../types";
import { loadState } from "../../localStorage";
import { getLoggedUserInfo } from "../../../api/api";

// import { getToken } from "../../api/api";

// import { loadState } from "../localStorage";

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

export const onFetchUserDataAsync = () => async (dispatch) => {
  try {
    const token = await loadState()
    const userData = await getLoggedUserInfo(token)
    console.log(userData)
    dispatch(onFetchUserData(userData))

  } catch (e) {
    dispatch(onFetchUserDataError());
  }
}