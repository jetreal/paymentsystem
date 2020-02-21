import { FETCH_USER_DATA, FETCH_USER_DATA_ERROR } from "../types";

let initialState = {
  userData: {
    id: 0,
    name: 'xxx',
    email: '',
    balance: 0
  }
}

const MainReducer = (state = initialState, action) => {
  switch (true) {

    case (action.type === FETCH_USER_DATA): {
      let stateCopy = { ...state}
      stateCopy.userData = {...action.userObj.data.user_info_token}
      stateCopy.itAuth = true
      return stateCopy
    }
    
    default:
      return { ...state }
  }

}

export default MainReducer