import { connect } from 'react-redux';

import Main from './Main';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
// import { onSubmitLoginAsync } from '../../../redux/actions';


let mapStateToProps = (state) => {

    return {
      // LoginState: state.LoginReducer
    } 
}

let AuthRedirectComponent = withAuthRedirect(Main)


const MainContainer = connect(
  mapStateToProps,
    {
      // onSubmitLoginAsync
    }
)(AuthRedirectComponent)

export default MainContainer

