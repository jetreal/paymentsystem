import React, { useEffect } from 'react'
import style from './main.module.sass'


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
      Hello: {props.MainState.userData.name}

      <button onClick={props.onLogout}> log out </button>
      <br/>
      <br/>
      <button onClick={props.onFetchUserDataAsync}> FetchUserData </button>
      <p>id: {props.MainState.userData.id}</p>
      <p>name: {props.MainState.userData.name}</p>
      <p>email: {props.MainState.userData.email}</p>
      <p>balance: {props.MainState.userData.balance}</p>

    </div>
  )
}