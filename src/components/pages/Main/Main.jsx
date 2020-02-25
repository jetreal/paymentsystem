import React, { useEffect } from "react";
import style from "./main.module.sass";
import { NavLink } from "react-router-dom";
import LoginButton from "../../common/LoginButton/LoginButton";
import MainHeader from "./mainHeader/MainHeader";
import ButtonSection from "./buttonSection/ButtonSection";
import TransactionBlock from "./transactionBlock/TransactionBlock";
import HistoryBlock from "./historyBlock/HistoryBlock";

export default props => {
  useEffect(() => {
   
    props.onFetchCurrentUserDataAsync();
    props.onGetListUserTransactionAsync()
      

  }, []);

  return (
    <div className={style.main}>
      {/* <NavLink to="/login"> */}
      <LoginButton name="logout" logout={props.onLogout} />
      {/* </NavLink> */}
      <MainHeader
        name={props.MainState.userData.name}
        balance={props.MainState.userData.balance}
      />
      <ButtonSection
        showCreateSection={props.onButtonCreateTransaction}
        isTransactionBlockActive={props.MainState.isTransactionButton}
        showHistorySection={props.onButtonHistoryTransaction}
        isHistoryBlockActive={props.MainState.isHistoryButton}
      />
      {props.MainState.isTransactionButton && (
        <TransactionBlock
          onFetchFilterRecipientAsync={props.onFetchFilterRecipientAsync}
          recipients={props.MainState.filterRecipients}
          recipient={props.MainState.recipient}
          onClearRecipient={props.onClearRecipient}
          setRecipientName={props.setRecipientName}
          setRecipientAmount={props.setRecipientAmount}
          onTransactionAsync={props.onTransactionAsync}
          onFetchCurrentUserDataAsync={props.onFetchCurrentUserDataAsync}
        />
      )}
      {(!props.MainState.isTransactionButton &&
        !props.MainState.isHistoryButton) &&
        props.MainState.isTransationSuccess && (
          <div className={style.congratulationWrap}>
            Transaction success !!!
            <br />
            <h3>
              You sent a transaction to the recipient
              <br />
              with the name:
              <br />
              <span>{props.MainState.successRecipient.name}</span>, in the
              amount of
              <span>{props.MainState.successRecipient.amount}</span>pw.
            </h3>
          </div>
        )}

{(!props.MainState.isTransactionButton &&
        !props.MainState.isHistoryButton) &&
        props.MainState.isTransationFailed && 
        <div>failed</div> }

      {props.MainState.isHistoryButton &&
       <HistoryBlock 
          arrayOfTransactions={props.MainState.arrayOfTransactions}
       />}

      {/* <p>id: {props.MainState.userData.id}</p>
      <p>name: {props.MainState.userData.name}</p>
      <p>email: {props.MainState.userData.email}</p>
      <p>balance: {props.MainState.userData.balance}</p> */}
    </div>
  );
};
