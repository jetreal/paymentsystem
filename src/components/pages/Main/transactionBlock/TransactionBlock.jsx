import React from 'react'
import style from './transactionBlock.module.sass'
import UserReduxForm from './userForm/UserForm'
import CheckUserReduxForm from './checkUserForm/checkUserFrom'




export default (props) => {

  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>
        Create new transaction
      </h2>
      {/* {props.recipients.length > 0 && */}
       <button 
          className={style.clearBtn}
          onClick={props.onClearRecipient}
       >
         Clear
      </button>
       {/* } */}
     
      {props.recipient.name === ''
       
        ? <div><UserReduxForm 
                  onChange={props.onFetchFilterRecipientAsync}
                  placeholder="Enter the name of recipient"
                  type='text'
                
                />
          <CheckUserReduxForm 
            recipients={props.recipients} 
            onSubmit={props.setRecipientName} 
          />
        </div> 
        : <div className={style.recipientDiv}>
            <p>
              recipient: 
              <br/>
              <span className={style.recipientName}>
                {props.recipient.name}
              </span>
            </p>
            <UserReduxForm 
              placeholder="Amount money"
              type='text'
              onSubmit={props.setRecipientAmount}
              number='number'
            />
           </div>

      
    
      }
      
        
    </div>
  )
} 

