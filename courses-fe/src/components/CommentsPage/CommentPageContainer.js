import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './style.scss';

import CommentSection from "./CommentSection";
import AddComment from './AddComment';

import { addComment, removeComment } from "./actions";

let CommentPageContainer = props => {
  const { addComment, comments, removeComment } = props;

  return (
    <div className="container container-comment-form">
      <AddComment addComment={addComment} />
      <CommentSection comments={comments} removeComment={removeComment} />
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
    addComment: bindActionCreators(addComment, dispatch),
    removeComment: bindActionCreators(removeComment, dispatch)
  };
};

CommentPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentPageContainer);

export default CommentPageContainer;
