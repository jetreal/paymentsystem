import React from 'react'
import style from './transactionBlock.module.sass'
import UserReduxForm from './userForm/UserForm'

export default (props) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>
        Create new transaction
      </h2>
      <div>
        <UserReduxForm />
      </div>
    </div>
  )
} 