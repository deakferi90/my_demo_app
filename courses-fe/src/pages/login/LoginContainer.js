import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getModel } from "./selectors";
import { increment, decrement, loginUser } from "./actions";
import LoginComponent from "./LoginComponent";

class LoginContainer extends Component {

  render() {
    return <LoginComponent {...this.props}/>;
  }
}

const mapStateToProps = (state) => {
  const model = getModel(state);
  return { model };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
    loginUser: bindActionCreators(loginUser, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
