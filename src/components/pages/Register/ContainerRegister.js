import { connect } from 'react-redux';

import Register from './Register';
import { onSubmitRegisterAsync, onClearFromWarning } from '../../../redux/actions';
// import RegisterReduxForm from './RegisterForm/RegisterForm';
import { fetchAllSystemUsersAsync } from '../../../redux/actions/mainActions';


let mapStateToProps = (state) => {
  // console.log(state)
  return {
    allSystemUsers: state.MainReducer.allSystemUsers,
    LoginState: state.LoginReducer,
    form: state.form.login
  }
}



const RegisterContainer = connect(
  mapStateToProps,
  {
    onSubmitRegisterAsync,
    onClearFromWarning,
    fetchAllSystemUsersAsync
  }
)(Register)


export default RegisterContainer
