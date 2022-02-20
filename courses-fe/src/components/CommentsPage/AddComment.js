import React from "react";

class AddComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: [],
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;

    const getData = () => {
      const data = new Date().toLocaleString();
      return data;
    };

    this.setState({
      [name]: value,
      date: [getData()]
    });
  };

  handleComment = () => {
    // if (!this.state.name.length || !this.state.comment.length) {
    //   alert("Fill up both fields!");
    //   return;
    // } else {
      this.props.addComment(
        this.state.name,
        this.state.date,
        this.state.comment
      );
  };

  render() {
    return (
      <>
        <h2>Comment section</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <textarea
            type="text"
            name="comment"
            placeholder="Comment"
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <button
            disabled={!this.state.name || !this.state.comment}
            type="button"
            className={!this.state.name || !this.state.comment ? "disable" : "submitBtn"}
            onClick={this.handleComment}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default AddComment;
