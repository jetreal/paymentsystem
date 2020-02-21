import {
  FETCH_USER_DATA,
  LOGOUT
} from "../../types";
import { loadState } from "../../localStorage";
import { getLoggedUserInfo } from "../../../api/api";

// import { getToken } from "../../api/api";

// import { loadState } from "../localStorage";

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