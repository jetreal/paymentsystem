import { connect } from 'react-redux';

import Main from './Main';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { onLogout } from '../../../redux/actions';
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
      onLogout
    }
)(AuthRedirectComponent)

export default MainContainer

