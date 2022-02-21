import React from "react";

const CommentSection = props => {
  const { comments, removeComment } = props;
  return (
    <div>
      {comments.map(comm => {
        return (
          <section key={comm.id} className="commentsSection">
            <div className="nameSection">
              {comm.name} {comm.date}
            </div>
            <div className="commentSection">{comm.comment}</div>
            <button
              className="deleteBtn"
              onClick={() => removeComment(comm.id)}
            >
              Delete
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default CommentSection;
