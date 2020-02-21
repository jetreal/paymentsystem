import React, { useEffect } from 'react'
import style from './main.module.sass'
import { NavLink } from 'react-router-dom';
import LoginButton from '../../common/LoginButton/LoginButton';


export default (props) => {
  useEffect(() => {
    // Обновляем название докуммента, используя API браузера
    if (props.MainState.userData.id === 0) {
      props.onFetchUserDataAsync()
    }

  });
  console.log(props)
  return (
    <div className={style.main}>
      {/* <NavLink to="/login"> */}
        <LoginButton name="logout" logout={props.onLogout}/>
      {/* </NavLink> */}
      Hello: {props.MainState.userData.name}

  
      <br/>
      <br/>
      
      <p>id: {props.MainState.userData.id}</p>
      <p>name: {props.MainState.userData.name}</p>
      <p>email: {props.MainState.userData.email}</p>
      <p>balance: {props.MainState.userData.balance}</p>

    </div>
  )
}