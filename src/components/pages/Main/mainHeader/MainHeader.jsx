import React from 'react'
import style from './mainHeader.module.sass'

export default (props) => {
  return (
    <header className={style.mainHeader}>
      <div className={style.wellcome}>
        <p>Wellcome:
          <span>
            {props.name}
          </span>
        </p>
      </div>
      <div className={style.balance}>
        <p>Your balance:
          <span>
            {props.balance}
          </span> 
           PW
        </p>
      </div>
    </header>
  )
} 