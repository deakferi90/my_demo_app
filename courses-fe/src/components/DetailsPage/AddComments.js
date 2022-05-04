import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class AddComments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comment: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleComment = () => {
    this.props.addComments(this.state.name, this.state.comment);
    this.setState({
      name: "",
      comment: ""
    })
  };

  render() {
    return (
      <div>
        <div className="form-section">
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
          <Button
            label="add comment"
            size="small"
            type="submit"
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            onClick={this.handleComment}
          >
            Send
          </Button>
        </div>
      </div>
    );
  }
}

export default AddComments;
