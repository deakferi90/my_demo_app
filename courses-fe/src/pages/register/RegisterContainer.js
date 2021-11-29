import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getModel } from "./selectors";
import { increment, decrement } from "./actions";
import RegisterComponent from "./RegisterComponent";

class RegisterContainer extends Component {
  
  render() {
    return <RegisterComponent {...this.props}/>;
  }
}

const mpStateToProps = (state) => {
  const model = getModel(state);
  return { model };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
  };
};

export default connect(mpStateToProps, mapDispatchToProps)(RegisterContainer);
