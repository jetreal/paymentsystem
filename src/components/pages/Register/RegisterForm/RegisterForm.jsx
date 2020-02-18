import React from 'react'
import style from './form.module.sass'
import {Field, reduxForm} from 'redux-form'


// let maxLength20 = maxLengthCreator(20)

const RegisterForm = (props) => {

	return (
    
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className={style.textbox}>
          <Field
            component={'input'} 
            name={'username'} 
            type={"text"} 
            placeholder={"Username"} 
            className={style.regInput} 
            autoComplete="off"
            // validate={[required, maxLength20]}
          />
        </div>

        <div className={style.textbox}>
          <Field
            component={'input'} 
            name={'email'} 
            type={"email"} 
            placeholder={"Email"} 
            className={style.regInput} 
            autoComplete="off"
          />
        </div>

        <div className={style.textbox}>
          <Field 
            component={'input'} 
            name={'password'} 
            type={"password"} 
            placeholder={"Password"} 
            className={style.regInput} 
            autoComplete="off"
          />
        </div>

        <input 
          type="submit" 
          className={style.btn} 
          value="Sign in"
          onClick={props.collectUserData}
        />

      </form>
      
		</div>
	)
}

const RegisterReduxForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterReduxForm