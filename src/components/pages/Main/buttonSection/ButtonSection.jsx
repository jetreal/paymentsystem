import React from 'react'
import style from './buttonSection.module.sass'
import { StyledButton } from './styledButton'

export default (props) => {
  return (
    <div className={style.wrapperButtonSection}>
      <div className={style.btnLeft}>
        <StyledButton
          onClick={props.showHistorySection}
          isActive={props.isTransactionBlockActive}
        >
          {!props.isHistoryBlockActive ? 'Transaction History' : 'close'}
        </StyledButton>
      </div>
      <div className={style.btnRight}>
        <StyledButton
          onClick={ props.showCreateSection }
          isActive={props.isHistoryBlockActive}
        >{!props.isTransactionBlockActive ? 'Create new transaction' : 'close'}
        </StyledButton>
      </div>
    </div>
  )
} 