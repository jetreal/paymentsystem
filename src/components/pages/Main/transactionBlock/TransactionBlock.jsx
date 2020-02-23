import React from 'react'
import style from './transactionBlock.module.sass'
import UserReduxForm from './userForm/UserForm'
import CheckUserReduxForm from './checkUserForm/checkUserFrom'




export default (props) => {
  console.log(props)
  const onSub = (data) => console.log(data)
  
  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>
        Create new transaction
      </h2>
      {props.users.length > 0 &&
       <button 
          className={style.clearBtn}
          onClick={props.onClearRecipient}
       >
         Clear
      </button>
       }
      
      <div>
        <UserReduxForm onChange={props.onFetchFilterRecipientAsync}/>
      </div>

      <CheckUserReduxForm users={props.users} onSubmit={onSub} />
        
    </div>
  )
} 

