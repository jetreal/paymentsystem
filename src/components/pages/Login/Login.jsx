import React from 'react'
import style from './login.module.sass'
import FormContainer from './LoginForm/LoginForm'
import FormWarning from '../Register/FormWarning/FormWarning'
import { NavLink, Redirect } from 'react-router-dom'
import LoginButton from '../../common/LoginButton/LoginButton'



export default (props) => {
	const onSubmit = (data) => {
		props.onSubmitLoginAsync(data)
	}

	if (props.LoginState.isChangeLoginPage) {
		return <Redirect to="/" />
	}

	return (
		<div>
			<NavLink to="/register">
        <LoginButton name="register"/>
      </NavLink>
			<div className={style.loginBox}>
				<FormContainer onSubmit={onSubmit} onChange={props.onClearFromWarning}/>
				{props.LoginState.warningText && 
				<FormWarning warningText={props.LoginState.warningText}/>}
				<NavLink to='/'>Main</NavLink>
			</div>
		</div>
			
	)
}