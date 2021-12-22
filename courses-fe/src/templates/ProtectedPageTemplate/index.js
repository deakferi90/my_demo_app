import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../shared/header";

const ProtectedPageTemplate = ({ children }) => {
    const navigate = useNavigate();

    useEffect(()=> {
        const user = localStorage.getItem('USER');
        if(!user) {
            navigate('/');
        }
    });
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default ProtectedPageTemplate;
