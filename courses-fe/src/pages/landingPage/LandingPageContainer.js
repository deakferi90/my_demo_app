import React, { Component } from "react";
import LandingPageComponent from "./LandingPageComponent";

class LandingPageContainer extends Component {

  render() {
    return <LandingPageComponent {...this.props}/>;
  }
}

export default LandingPageContainer;
