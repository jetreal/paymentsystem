import { SUBMIT_LOGIN, ON_LOGIN_ERROR } from "../types";

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
        stateCopy.jwt = action.loginData.data.id_token;
        stateCopy.loginData.loginEmail = action.email;
        stateCopy.loginData.loginPassword = action.password;
        stateCopy.loginData.isAuth = true;
        stateCopy.warningText = 'Success'
 
        return stateCopy
      }
      case (action.type === ON_LOGIN_ERROR): {
        console.log(action)
        let stateCopy = {...state}

        if (action.errorData === '400') {
          stateCopy.warningText = 'Заполните все поля!'
        }

        if (action.errorData === '401') {
          stateCopy.warningText = 'Логин или пароль ошибочны!'
        }


        return stateCopy
      }
      default:
        return {...state}
    }
    
  }


export default LoginReducer