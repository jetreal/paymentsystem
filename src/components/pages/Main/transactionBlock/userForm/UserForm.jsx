import React from 'react'
import style from './userForm.module.sass'
import {Field, reduxForm} from 'redux-form'
// import { validateLength, isEmail, required, passwordsMustMatch } from '../../../../utils/validators/validator'
import FormInput from '../../../../common/FormInput'
import { validateLength, required } from '../../../../../utils/validators/validator'


const maxLength = validateLength(4, 20)
const maxNameLength = validateLength(null, 26)


const userForm = (props) => {

	return (
    
    <div>
      <form onSubmit={props.handleSubmit} >

        <div className={style.textbox}>

          <Field
            component={FormInput} 
            name={'username'} 
            type={"text"} 
            placeholder={"name of the recipient"} 
            className={style.regInput} 
            autoComplete="off"
            validate={[maxNameLength]}
          />
        </div>   

      </form>
      
		</div>
	)
}

const UserReduxForm = reduxForm({
  // a unique name for the form
  form: 'getUser',
  initialValues: {

  }
})(userForm)

export default UserReduxForm