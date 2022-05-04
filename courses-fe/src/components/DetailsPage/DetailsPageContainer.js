import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './_style.scss';

import AddComments from './AddComments';
import { Comments } from './Comments';

import { addComments } from "./actions";

let DetailsPageContainer = props => {
  const { addComments, comments } = props;

  return (
    <div className="container container-comment-form">
      <AddComments addComments={addComments} />
      <Comments comments={comments}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComments: bindActionCreators(addComments, dispatch)
  };
};

DetailsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPageContainer);

export default DetailsPageContainer;
