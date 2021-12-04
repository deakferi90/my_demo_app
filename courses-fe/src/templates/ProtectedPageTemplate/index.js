import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getModel } from "./selectors";
import { useNavigate } from "react-router";

const ProtectedPageTemplate = (props) => {
    const { children, model } = props;
    const { loginStatus } = model;
    const navigate = useNavigate();

    useEffect(()=> {
        if(!loginStatus) {
            navigate('/');
        }
    });
  return (
    <React.Fragment>
      <h1>My protected header</h1>
      {children}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
    const model = getModel(state);
    return {
        model
    };
}

export default connect(mapStateToProps, null)(ProtectedPageTemplate);
