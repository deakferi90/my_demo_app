import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './style.scss';
import DropDownPageComponent from './DropDownPageComponent';
import { addItemAction, setSelectedValue, removeItemAction, addPairNumber, addImPairNumber, addSpecialWord, addListWord,
  openModal, closeModal, increment, decrement } from "./actions";

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
    imPairNumbers: state.dropdown.imPairNumber,
    specialWords: state.dropdown.specialWords,
    listWords: state.dropdown.listWords,
    isModalOpen: state.dropdown.isModalOpen,
    modalText: state.dropdown.modalText,
    counter: state.dropdown.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemAction: bindActionCreators(addItemAction, dispatch),
    setSelectedValue: bindActionCreators(setSelectedValue, dispatch),
    removeItemAction: bindActionCreators(removeItemAction, dispatch),
    addPairNumber: bindActionCreators(addPairNumber, dispatch),
    addImPairNumber: bindActionCreators(addImPairNumber, dispatch),
    addSpecialWord: bindActionCreators(addSpecialWord, dispatch),
    addListWord: bindActionCreators(addListWord, dispatch),
    openModal: bindActionCreators(openModal, dispatch),
    closeModal: bindActionCreators(closeModal, dispatch),
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch)
  };
};

DropDownPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDownPageContainer);

export default DropDownPageContainer;
