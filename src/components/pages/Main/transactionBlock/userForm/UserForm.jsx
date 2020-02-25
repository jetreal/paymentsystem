import React from 'react'
import style from './userForm.module.sass'
import {Field, reduxForm} from 'redux-form'
// import { validateLength, isEmail, required, passwordsMustMatch } from '../../../../utils/validators/validator'
import FormInput from '../../../../common/FormInput'
import { validateLength, required, availability, number } from '../../../../../utils/validators/validator'
import { connect } from 'react-redux'


const maxLength = validateLength(4, 20)
const maxNameLength = validateLength(null, 24)

const lessThan = (otherField) =>
  (value = 1, previousValue = 1, allValues) => {
    // console.log(otherField)
    // console.log()
    // console.log(previousValue)
    // console.log(allValues)
    return value < 10001 ? value : previousValue
  } 

const userForm = (props) => {
  // console.log(props.MainState.userData.balance)
	return (
    
    <div>
      <form onSubmit={props.handleSubmit} >

        <div className={style.textbox}>

          <Field
            component={FormInput}
            name={'username'}
            type={props.type}
            placeholder={props.placeholder}
            className={style.regInput}
            autoComplete="off"
            maxLength='5'

            validate={props.number !== 'number' ? [maxNameLength] : [number, availability]} 
            normalize={props.number === 'number' ? lessThan(null) : undefined}
  
          />
        </div>
        {props.number === 'number' && 
          <div>
            <input 
              type="submit" 
              className={style.btn} 
              value="send"
              // onClick={props.collectUserData}
              disabled={props.pristine || props.submitting}
              style={(props.pristine || props.submitting || props.invalid ) ? {opacity: 0.4, cursor: 'not-allowed'} : {opacity: 1}}
            />
          </div>
        }  

      </form>
      
		</div>
	)
}

let UserReduxForm = reduxForm({
  // a unique name for the form
  form: 'getUser',
  initialValues: {
     min: 0,
     max: 1000
  }
})(userForm)

UserReduxForm = connect(state => {
  return {
    MainState: state.MainReducer
  }
  

 
})(UserReduxForm)

export default UserReduxForm