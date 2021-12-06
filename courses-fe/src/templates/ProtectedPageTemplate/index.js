import React, { useEffect } from "react";
import { useNavigate } from "react-router";

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
      <h1>My protected header</h1>
      {children}
    </React.Fragment>
  );
};

export default ProtectedPageTemplate;
