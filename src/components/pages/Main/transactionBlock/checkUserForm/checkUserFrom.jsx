import {Field, formValueSelector, reduxForm} from 'redux-form'
import React from 'react'
import { connect } from 'react-redux'
import style from '../transactionBlock.module.sass'
import { RadioField } from '../../../../common/RadioButton/RadioButton'




let checkUserForm = (props) => {

  return (
    
      <form onSubmit={props.handleSubmit}>
        <ul>
          {props.users.map(user => {
            return (
              <label htmlFor={user.id} key={user.id}>
                <li key={user.id}>
                  <Field
                    component={RadioField}
                    className={style.inputRadio}
                    type="radio"
                    name="username"
                    id={user.id}
                    value={user.name}
                    
                  />
                  <span key={user.id}>{user.name}</span>
                  <input
                    className={style.inputChoose}
                    type="submit"
                    value="ch"
                    disabled={props.hasCheckedValue !== user.name}
                    style={props.hasCheckedValue !== user.name ?
                          {opacity: 0, pointerEvents: 'none'} :
                          {opacity: 1, pointerEvents: 'auto'}
                        }
                  />
                </li>
              </label>
            );
          })}
        </ul>
      </form>
    
  );
}

checkUserForm = reduxForm({
  form: 'checkUser',
  initialValues: {

  }
})( checkUserForm )

const selector = formValueSelector('checkUser')
checkUserForm = connect(state => {
  // can select values individually
  const hasCheckedValue = selector(state, 'username')

  return {
    hasCheckedValue
  }
})(checkUserForm )

export default checkUserForm