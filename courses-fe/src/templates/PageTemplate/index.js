import React, { Fragment } from "react";
import { useNavigate } from "react-router";
import Header from "../../shared/header";

const PageTemplate = ({ children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem('USER');
  if (!user) {
    navigate('/');
  }
  return (
    <Fragment>
      <Header />
      <Fragment>{children}</Fragment>
    </Fragment>
  );
};

export default PageTemplate;
