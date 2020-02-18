import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import LoginReducer from "./reducers/LoginReducer";
import ReduxThunk from 'redux-thunk';

const middleware = [ReduxThunk]

let reducers = combineReducers({
  LoginReducer,
  form: formReducer
})

let store = createStore(
  reducers,
  applyMiddleware(...middleware)
  );

window.store = store;

export default store;