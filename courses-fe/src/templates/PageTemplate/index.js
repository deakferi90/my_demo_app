import React, { Fragment } from "react";
import Header from "../../shared/header";

const PageTemplate = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Fragment>{children}</Fragment>
    </Fragment>
  );
};

export default PageTemplate;
