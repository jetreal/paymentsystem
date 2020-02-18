import { connect } from 'react-redux';

import Login from './Login';
import { onSubmitLoginAsync } from '../../../redux/actions';


let mapStateToProps = (state) => {
    return {
        LoginState: state.LoginReducer
    } 
}



const CenterContainer = connect(
  mapStateToProps,
    {
      onSubmitLoginAsync
    }
)(Login)

export default CenterContainer

