import React from 'react'
import style from './login.module.sass'
import FormContainer from './LoginForm/LoginForm'
import FormWarning from '../Register/FormWarning/FormWarning'
import { NavLink, Redirect } from 'react-router-dom'



export default (props) => {
	const onSubmit = (data) => {
		props.onSubmitLoginAsync(data)
	}

	if (props.LoginState.loginData.isAuth) {
		return <Redirect to="/" />
	}

	return (
		<div className={style.loginBox}>
			<FormContainer onSubmit={onSubmit}/>
			{props.LoginState.warningText && 
			<FormWarning warningText={props.LoginState.warningText}/>}
			<NavLink to='/'>Main</NavLink>
		</div>
			
	)
}