import React from 'react'
import style from '../login.module.sass'
import {Field, reduxForm} from 'redux-form'

import { validateLength, isEmail } from '../../../../utils/validators/validator'
import FormInput from '../../../common/FormInput'
import { connect } from 'react-redux'
const R = require('ramda');



const maxLength = validateLength(4, 20)

let LoginForm = (props) => {
	return (
      <form onSubmit={props.handleSubmit}>
        <h1>Login</h1>
        <div className={style.textbox}>
          <Field
            component={FormInput} 
            name={'email'} 
            type={"email"} 
            placeholder={"Email"} 
            // className={style.regInput}
            autoComplete="off"
            validate={[isEmail]}
          />
        </div>

        <div className={style.textbox}>
          <Field 
            component={FormInput}
            name={'password'} 
            type={"password"} 
            placeholder={"Password"} 
            className={style.regInput} 
            autoComplete="off"
            validate={[maxLength]}
          />
          
        </div>

        <input 
          type="submit" 
          className={style.btn} 
          value="Sign in"
          onClick={props.collectUserData}
          disabled={props.pristine || props.submitting}
          style={(props.pristine || props.submitting ) ? {opacity: 0.3} : {opacity: 1}}
        />
      </form>
	)
}



const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login',
  onSubmit: value => console.log('second', value),
  // initialValues: {
  //   email: 'r',
  //   password: 'r'
  // }


})(LoginForm)

export default LoginReduxForm

// LoginForm = connect(
//   state => ({
//     valid: isValid('myForm')(state)
//   })
// )(LoginForm)