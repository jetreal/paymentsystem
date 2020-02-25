import React from 'react'
import style from './historyBlock.module.sass'

export default (props) => {
  console.log(props.arrayOfTransactions)
  // console.log(props.arrayOfTransactions[0])
  return (
    <div style={{border: '1px solid red'}}>
      <h2 className={style.header}>
        Transaction History 
      </h2>
      <div>{props.arrayOfTransactions[0].username}</div>
      <div>{props.arrayOfTransactions[0].id}</div>
      <div>{props.arrayOfTransactions[0].date}</div>
      <div>{props.arrayOfTransactions[0].amount}</div>
      <div>{props.arrayOfTransactions[0].balance}</div>
    </div>
  )
} 