import React from 'react'
import style from '../Login/login.module.sass'
import RegisterForm from './RegisterForm/RegisterForm'
import FormWarning from './FormWarning/FormWarning'


export default (props) => {
  const onRegisterSubmit = (formData) => {
    props.onSubmitRegisterAsync(formData)
    // console.log(formData)
  }

	return (
    

		<div className={style.loginBox}>
			<h1>Register</h1>

      <RegisterForm onSubmit={onRegisterSubmit}/>
      {props.LoginState.warningText && 
			<FormWarning warningText={props.LoginState.warningText}/>}
		</div>
	)
}