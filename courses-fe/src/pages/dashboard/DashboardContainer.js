import React, { Component } from "react";
import DashboardComponent from "./DashboardComponent";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOutUser, loadCats, loadDogs } from './actions';
import { getModel } from './selectors';


class DashboardContainer extends Component {
    render() {
        return <DashboardComponent {...this.props}/>;
    }
}

const mapStateToProps = (state) => {
    const model = getModel(state);
    return {
        model
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: bindActionCreators(logOutUser, dispatch),
        loadCats: bindActionCreators(loadCats, dispatch),
        loadDogs: bindActionCreators(loadDogs, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
