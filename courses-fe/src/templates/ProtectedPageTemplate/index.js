import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../shared/header";

const ProtectedPageTemplate = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('USER');
    if (!user) {
      navigate('/');
    }
  });
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default ProtectedPageTemplate;
