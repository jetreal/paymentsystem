import { FETCH_USER_DATA,
   FETCH_USER_DATA_ERROR,
    ON_BUTTON_CREATE_TRANSACTION,
     ON_BUTTON_HISTORY_TRANSACTION,
     ON_GET_USERS,
     ON_CLEAR_RECIPIENT_LIST } from "../types";

let initialState = {
  filterUsers: [{
    id: 0,
    name: 'xxxxxxxxxxxxxxxxxxxxxxxx'
  }
  ],
  isHistoryButton: false,
  isTransactionButton: false,
  userData: {
    id: 0,
    name: '',
    email: '',
    balance: 0
  }
}

const MainReducer = (state = initialState, action) => {
  switch (true) {
    case (action.type === ON_CLEAR_RECIPIENT_LIST): {
      let stateCopy = { ...state}
        stateCopy.filterUsers = []
      return stateCopy
    }
    case (action.type === ON_GET_USERS): {
      let stateCopy = { ...state}
        stateCopy.filterUsers = [...action.recipients.data]
      return stateCopy
    }
    case (action.type === ON_BUTTON_HISTORY_TRANSACTION): {
      let stateCopy = { ...state}
      if (!stateCopy.isTransactionButton) {
        stateCopy.isHistoryButton = !stateCopy.isHistoryButton
      }

      return stateCopy
    }
    case (action.type === ON_BUTTON_CREATE_TRANSACTION): {
      let stateCopy = { ...state}
      if (!stateCopy.isHistoryButton) {
        stateCopy.isTransactionButton = !stateCopy.isTransactionButton
      }
      return stateCopy
    }
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