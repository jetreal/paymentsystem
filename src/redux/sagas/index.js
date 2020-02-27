import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Наша Сага-наблюдатель: создаёт новые incrementAsync задачи на каждом INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('SUBMIT_REGISTER', delayChangeRegisterPage)
  yield takeEvery('SUBMIT_LOGIN', delayChangeLoginPage )
  yield takeEvery('ON_TRANSACTION_SUCCESS', clearTransWarnings)
  yield takeEvery('ON_TRANSACTION_FAil', onTransactionFail)
  yield takeEvery('LOGOUT', onLogout)
 


  // yield takeEvery('RIGHT_BUTTON_CLICK', showReactText)
  // yield takeEvery(['INITIAL_SLIDE_LEFT', 'INITIAL_SLIDE_RIGHT' ], unblockSlider)

}

export function* onTransactionFail() {
  yield delay(5000)
  yield put({type: 'LOGOUT'})
}

export function* onLogout() {
  yield put({type: 'ON_CLEAR_RECIPIENT_LIST'})
  yield put({type: 'CLOSE_MENU'})
}

export function* clearTransWarnings() {
  yield delay(9150)
  yield put({type: 'CLEAR_FORM_WARNING'})
}

export function* delayChangeRegisterPage() {
    yield delay(1150)
    yield put({type: 'CHANGE_REGISTERPAGE_WITH_DELAY'})
    yield put({type: 'LOGOUT'})
    // yield put({type: 'CHANGE_TV'})
  }
  export function* delayChangeLoginPage() {
    yield delay(1150)
    yield put({type: 'CHANGE_LOGINPAGE_WITH_DELAY'})
    // yield put({type: 'CHANGE_TV'})
  }

export default function* rootSaga() {
    yield all([
      // helloSaga,
      watchIncrementAsync()
    ])
  }

  