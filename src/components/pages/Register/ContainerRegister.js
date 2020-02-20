import { connect } from 'react-redux';

import Register from './Register';
import { onSubmitRegisterAsync, onClearFromWarning } from '../../../redux/actions';
import RegisterReduxForm from './RegisterForm/RegisterForm';


let mapStateToProps = (state) => {
  // console.log(state)
    return {
        LoginState: state.LoginReducer,
        form: state.form.login
    } 
}



const RegisterContainer = connect(
  mapStateToProps,
    {
      onSubmitRegisterAsync,
      onClearFromWarning
    }
)(Register)


export default RegisterContainer

