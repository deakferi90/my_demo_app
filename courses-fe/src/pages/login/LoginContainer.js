import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getModel } from "./selectors";
import { loginUser } from "./actions";
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
    loginUser: bindActionCreators(loginUser, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
