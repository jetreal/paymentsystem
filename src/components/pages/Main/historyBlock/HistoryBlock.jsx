import React from 'react'
import style from './historyBlock.module.sass'

export default (props) => {
  return (
    <div style={{border: '1px solid red'}}>
      <h2 className={style.header}>
        Transaction History 
      </h2>
      <div>content</div>
    </div>
  )
} 