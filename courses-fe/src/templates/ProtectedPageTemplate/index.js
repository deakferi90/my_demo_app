import React from "react";
import { useNavigate } from "react-router";
//import Header from "../../shared/header";

const ProtectedPageTemplate = ({ children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem('USER');
  if (!user) {
    navigate('/');
  }
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default ProtectedPageTemplate;
