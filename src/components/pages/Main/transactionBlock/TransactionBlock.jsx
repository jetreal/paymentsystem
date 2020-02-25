import React, { useEffect } from "react";
import style from "./transactionBlock.module.sass";
import UserReduxForm from "./userForm/UserForm";
import CheckUserReduxForm from "./checkUserForm/checkUserFrom";

export default props => {
  useEffect(() => {
    // Обновляем название докуммента, используя API браузера
    // if (props.MainState.userData.id === 0) {
    props.onFetchCurrentUserDataAsync();
    // }
  }, []);

  const transObj = {
    name: props.recipient.name,
    amount: props.recipient.amount
  };
  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>Create new transaction</h2>
      {/* {props.recipients.length > 0 && */}
      <button className={style.clearBtn} onClick={props.onClearRecipient}>
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
