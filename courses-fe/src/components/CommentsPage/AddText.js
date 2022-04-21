import React, {useState} from "react";

const AddText = () => {
  const [comment, setComment] = useState('');

  const handleText = (e) => {
    setComment(e.target.value);
  };

    return (
      <div className="container container-comment-form">
        <h2>Add text</h2>
        <form>
          <textarea
            type="text"
            name="comment"
            placeholder="Comment"
          />
          <button
            type="button"
            className="submitBtn"
            onClick={handleText}
          >
            Submit
          </button>
          <div className="comment">{comment}</div>
        </form>
      </div>
    );
}

export default AddText;
