import React from 'react'
import style from '../Login/login.module.sass'
import RegisterForm from './RegisterForm/RegisterForm'
import FormWarning from './FormWarning/FormWarning'
import { NavLink, Redirect } from 'react-router-dom'
import LoginButton from '../../common/LoginButton/LoginButton'



export default (props) => {


  if (props.LoginState.isChangePage) {
    return <Redirect to="/login" />
	}

  console.log(props)
  const onRegisterSubmit = (formData) => {
    props.onSubmitRegisterAsync(formData)
  }

	return (
    <div>
      <NavLink to="/login">
        <LoginButton name="login"/>
      </NavLink>
      <div className={style.loginBox}>
        <h1>Register</h1>

        <RegisterForm onSubmit={onRegisterSubmit} onChange={props.onClearFromWarning}/>
        {props.LoginState.warningText &&
        <FormWarning warningText={props.LoginState.warningText}/>}
      </div>
    </div>
	)
}