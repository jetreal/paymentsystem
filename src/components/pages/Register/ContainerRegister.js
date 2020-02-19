import { connect } from 'react-redux';

import Register from './Register';
import { onSubmitRegisterAsync } from '../../../redux/actions';


let mapStateToProps = (state) => {
  // console.log(state)
    return {
        LoginState: state.LoginReducer,
        form: state.form.login
    } 
}



const CenterContainer = connect(
  mapStateToProps,
    {
      onSubmitRegisterAsync
    }
)(Register)

export default CenterContainer

