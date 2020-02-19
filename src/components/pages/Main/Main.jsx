import React from 'react'
import style from './main.module.sass'

export default (props) => {
  
  return (
    <div className={style.main}>
      Hello main

      <button onClick={props.onLogout}> log out </button>
    </div>
  )
}