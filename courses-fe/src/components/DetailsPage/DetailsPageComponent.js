import * as React from "react";
import { Comments } from "./Comments";
import "./_style.scss";
//import { Button, TextField } from "@mui/material";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddComments from "./AddComments";

export const DetailsPage = () => {
  return (
    <div>
      <div>
        <div>Material UI</div>
        <h1>Comments</h1>
      </div>
      <form>
        <AddComments />
      </form>
      <Comments />
    </div>
  );
};

export default DetailsPage;
