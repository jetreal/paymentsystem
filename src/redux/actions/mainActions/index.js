import {
  FETCH_USER_DATA,
  LOGOUT,
  ON_BUTTON_CREATE_TRANSACTION,
  ON_BUTTON_HISTORY_TRANSACTION,
  ON_GET_USERS,
  ON_CLEAR_RECIPIENT_LIST,
  SET_RECIPIENT_NAME,
  SET_RECIPIENT_AMOUNT,
  ON_TRANSACTION_SUCCESS,
  ON_TRANSACTION_FAil,
  GET_LIST_USER_TRANSACTION,
  REPEAT_TRANSACTION
} from "../../types";
import { loadState } from "../../localStorage";
import { getLoggedUserInfo, getFilteredUserList, cleateTransaction, getListUserTransaction } from "../../../api/api";

import {reset} from 'redux-form';



// import { getToken } from "../../api/api";

// import { loadState } from "../localStorage";

export function repeatTransaction(transData) {
  return {
    type: REPEAT_TRANSACTION,
    transData: transData
  }
}
function onTransactionFail(transData) {
  return {
    type: ON_TRANSACTION_FAil,
    transData: transData
  }
}

function onTransactionSuccess(transData) {
  return {
    type: ON_TRANSACTION_SUCCESS,
    transData: transData
  }
}

export const onTransactionAsync = (transObj) => async (dispatch) => {

  try {
    const token = await loadState()
    const allTransactionDataObj = await cleateTransaction(transObj, 'token')
    if (typeof allTransactionDataObj === 'string') {
      if (allTransactionDataObj.trim() === 'UnauthorizedError: jwt malformed') {
        await dispatch(onTransactionFail())
      } 
    }
  
      await dispatch(onTransactionSuccess(allTransactionDataObj))
      await dispatch(onGetListUserTransactionAsync())
      await dispatch(onFetchCurrentUserDataAsync())
 
    
  } catch (e) {
    console.log(e)
    // dispatch(onTransactionFail())
  }
}

// checkUser
export function setRecipientAmount(recipientAmount) {
  return {
    type: SET_RECIPIENT_AMOUNT,
    amount: +recipientAmount.amount
  }
}

export function setRecipientName(recipientName) {
  return {
    type: SET_RECIPIENT_NAME,
    name: recipientName.username
  }
}

export const onClearRecipient = () => async (dispatch) => {
  await dispatch(reset('getUser'));
  await dispatch(reset('checkUser'));
  dispatch({type: ON_CLEAR_RECIPIENT_LIST})
  // return {
  //   type: ON_CLEAR_RECIPIENT_LIST
  // }
}

function onGetUsers(recipients) {
  return {
    type: ON_GET_USERS,
    recipients
  }
}

export const onFetchFilterRecipientAsync = (filteredChar) => async (dispatch) => {
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

export const onGetListUserTransactionAsync = () => async (dispatch) => {
  try {
    const token = await loadState()
    const arrTransactions = await getListUserTransaction(token)
    dispatch({type: GET_LIST_USER_TRANSACTION, arrTransactions})
  } catch (e) {
    console.log(e)
  }
}