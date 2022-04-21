import React from "react";

const CommentSection = (props) => {
  const { texts } = props;
  return (
    <div className="comment-box-section">
      <p>{texts}</p>
    </div>
  );
};

export default CommentSection;
