import { SUBMIT_LOGIN } from "../types";


let initialState = {
  warningText: '',
  jwt: '',
  loginData: {
    loginEmail: '',
    loginPassword: '',
    isAuth: false
  }
}


const LoginReducer = (state = initialState, action) => {
  switch (true) {
      case (action.type === SUBMIT_LOGIN): {
        console.log(action)
        let stateCopy = {...state}
        stateCopy.jwt = action.loginData.id_token;
        stateCopy.loginData.loginEmail = action.loginData.email;
        stateCopy.loginData.loginPassword = action.loginData.password;
 
        return stateCopy
      }
      default:
        return {...state}
    }
    
  }


export default LoginReducer