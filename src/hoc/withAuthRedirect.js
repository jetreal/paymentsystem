import { Redirect } from 'react-router-dom';
import React from 'react'
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.LoginReducer.loginData.isAuth

})

export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) {
        return <Redirect to="/login" />
      }
      return <Component {...this.props} />
    }
  }
  let ConnectedAuthRedirectComponent = 
    connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}