import React from "react";
import style from "./transactionBlock.module.sass";
import UserReduxForm from "./userForm/UserForm";
import CheckUserReduxForm from "./checkUserForm/checkUserFrom";

export default props => {

  const transObj = {
    name: props.recipient.name,
    amount: props.recipient.amount
  };

  const isRecipients = props.recipients.length
  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>Create new transaction</h2>
      {/* {props.recipients.length > 0 && */}
      <button 
        className={style.clearBtn} 
        onClick={props.onClearRecipient}
        style={{opacity: isRecipients === 0 ? '0.3' : '1',
                cursor: isRecipients === 0 ? 'default' : 'pointer'}}
        disabled={isRecipients === 0}

      >
        Clear
      </button>
      {/* } */}

      {props.recipient.name === "" ? (
        <div>
          <UserReduxForm
            onChange={props.onFetchFilterRecipientAsync}
            placeholder="Enter the name of recipient"
            type="text"
          />
          <CheckUserReduxForm
            recipients={props.recipients}
            onSubmit={props.setRecipientName}
          />
        </div>
      ) : (
        <div className={style.recipientDiv}>
          <p>
            recipient:
            <br />
            <span className={style.recipientName}>{props.recipient.name}</span>
          </p>

          {props.recipient.amount === 0 ? (
            <UserReduxForm
              placeholder="Enter the Amount money"
              type="text"
              onSubmit={props.setRecipientAmount}
              number="number"
            />
          ) : (
            <div>
              <p>
                Amount:
                <br />
                <span className={style.recipientName}>
                  {props.recipient.amount}
                </span>
                PW
              </p>
              <h3>Confirm transaction ?</h3>
              <div className={style.wrapperConfirmButtons}>
                <button onClick={props.onClearRecipient}>Cancel</button>
                <button onClick={props.onTransactionAsync.bind(null, transObj)}>
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
