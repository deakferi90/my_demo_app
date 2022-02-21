import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './style.scss';
import DropDownPageComponent from './DropDownPageComponent';
import { addItemAction, setSelectedValue, removeItemAction, addPairNumber, addImPairNumber } from "./actions";

let DropDownPageContainer = props => {

  return (
    <div>
      <div className="container container-dropdown-form">
        <DropDownPageComponent {...props} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    items: state.dropdown.names,
    selectedValue: state.dropdown.selectedValue,
    pairNumbers: state.dropdown.pairNumber,
    imPairNumbers: state.dropdown.imPairNumber
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemAction: bindActionCreators(addItemAction, dispatch),
    setSelectedValue: bindActionCreators(setSelectedValue, dispatch),
    removeItemAction: bindActionCreators(removeItemAction, dispatch),
    addPairNumber: bindActionCreators(addPairNumber, dispatch),
    addImPairNumber: bindActionCreators(addImPairNumber, dispatch)
  };
};

DropDownPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDownPageContainer);

export default DropDownPageContainer;
