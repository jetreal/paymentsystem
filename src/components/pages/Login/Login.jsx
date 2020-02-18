import React from 'react'
import style from './login.module.sass'
import LoginForm from './LoginForm/LoginForm'
import FormWarning from '../Register/FormWarning/FormWarning'



export default (props) => {
	const onSubmit = (data) => {
		// console.log(data)
		props.onSubmitLoginAsync(data)
	}

	return (
		<div className={style.loginBox}>
			<LoginForm onSubmit={onSubmit}/>
			<FormWarning waningText={props.warning}/>
		</div>
	)
}