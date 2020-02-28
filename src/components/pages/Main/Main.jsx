import React, { useEffect, useState } from "react";
import style from "./main.module.sass";
import LoginButton from "../../common/LoginButton/LoginButton";
import MainHeader from "./mainHeader/MainHeader";
import ButtonSection from "./buttonSection/ButtonSection";
import TransactionBlock from "./transactionBlock/TransactionBlock";
import HistoryBlock from "./historyBlock/HistoryBlock";

import { CSSTransition } from "react-transition-group";
import Preloader from "../../common/Preloader/Preloader";

export default props => {
  
  let [isLoaded, setIsLoaded] = useState(false);
  let [appearHome, setAppearHome] = useState(
    !props.MainState.isTransactionButton
  );
  // const [age, setAge] = useState(42);

  useEffect(() => {
    setIsLoaded(true)
    props.onFetchCurrentUserDataAsync();
    props.onGetListUserTransactionAsync();
  }, []);

  return (
    <div className={style.main} onLoad={() => setIsLoaded(true)}>
      <Preloader isLoaded={isLoaded} />
      {/* <NavLink to="/login"> */}
      {/* </NavLink> */}
      <MainHeader
        logout={props.onLogout}
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
        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={{
            appear: 2000,
            enter: 1000,
            exit: 1000
          }}
          classNames="fade"
        >
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
        </CSSTransition>
      )}
      {!props.MainState.isTransactionButton &&
        !props.MainState.isHistoryButton &&
        props.MainState.isTransationSuccess && (
          <div className={style.congratulationWrap}>
            <br />
            <br />
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

      {!props.MainState.isTransactionButton &&
        !props.MainState.isHistoryButton &&
        props.MainState.isTransationFailed && (
          <div className={style.congratulationWrap} style={{color: '#0078D7'}}>
            <br />
            <br />
            Transaction failed !!!
            <br />
            <h3>
              You are not logged in. Session timed out.
              <br />
              Pleace login again!
            </h3>
          </div>
        )}

      {props.MainState.isHistoryButton && (
        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={{
            appear: 2000,
            enter: 1000,
            exit: 1000
          }}
          classNames="fade"
        >
          <HistoryBlock
            arrayOfTransactions={props.MainState.arrayOfTransactions}
            repeatTransaction={props.repeatTransaction}
          />
        </CSSTransition>
      )}

      {/* <p>id: {props.MainState.userData.id}</p>
      <p>name: {props.MainState.userData.name}</p>
      <p>email: {props.MainState.userData.email}</p>
      <p>balance: {props.MainState.userData.balance}</p> */}
    </div>
  );
};
