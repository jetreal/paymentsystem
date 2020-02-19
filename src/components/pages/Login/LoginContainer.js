import { connect } from 'react-redux';

import Login from './Login';
import { onSubmitLoginAsync } from '../../../redux/actions';


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
      onSubmitLoginAsync
    }
)(Login)

export default CenterContainer

