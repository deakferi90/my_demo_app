import React, { Component } from "react";
import LandingPage from "./LandingPageComponent";

class LandingPageContainer extends Component {

  render() {
    return <LandingPage {...this.props}/>;
  }
}

export default LandingPageContainer;
