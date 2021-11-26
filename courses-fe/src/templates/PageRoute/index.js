import React, { Component } from "react";
import { Route } from 'react-router-dom';

class PageRoute extends Component {
    render() {
        let { component: Component, ...rest } = this.props;
        return  <Route {...rest} render={(props) => <Component {...props} />} />
    }
}

export default PageRoute;