import React from 'react'
import style from '../Login/login.module.sass'
import RegisterForm from './RegisterForm/RegisterForm'
import FormWarning from './FormWarning/FormWarning'


export default () => {
  
  const collectUserData = (formData) => {
    console.log(formData)
  }

	return (
    

		<div className={style.loginBox}>
			<h1>Register</h1>

      <RegisterForm onSubmit={collectUserData}/>
      <FormWarning />
		</div>
	)
}