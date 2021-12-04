import React, { Component } from "react";
import DashboardComponent from "./DashboardComponent";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOutUser } from './actions';


class DashboardContainer extends Component {
    render() {
        return <DashboardComponent {...this.props}/>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: bindActionCreators(logOutUser, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(DashboardContainer);
