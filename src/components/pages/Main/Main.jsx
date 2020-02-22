import React, { useEffect } from 'react'
import style from './main.module.sass'
import { NavLink } from 'react-router-dom';
import LoginButton from '../../common/LoginButton/LoginButton';
import MainHeader from './mainHeader/MainHeader';
import ButtonSection from './buttonSection/ButtonSection';
import TransactionBlock from './transactionBlock/TransactionBlock';
import HistoryBlock from './historyBlock/HistoryBlock';


export default (props) => {
  useEffect(() => {
    // Обновляем название докуммента, используя API браузера
    if (props.MainState.userData.id === 0) {
      props.onFetchUserDataAsync()
    }

  });
  console.log(props)
  return (
    <div className={style.main}>
      {/* <NavLink to="/login"> */}
        <LoginButton name="logout" logout={props.onLogout}/>
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
      {props.MainState.isTransactionButton && <TransactionBlock />}
      {props.MainState.isHistoryButton && <HistoryBlock />}


    
      {/* <p>id: {props.MainState.userData.id}</p>
      <p>name: {props.MainState.userData.name}</p>
      <p>email: {props.MainState.userData.email}</p>
      <p>balance: {props.MainState.userData.balance}</p> */}

    </div>
  )
}