import React from "react";
import { useNavigate } from 'react-router-dom';

const DashboardComponent = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('USER');
    localStorage.removeItem('ACCESS_TOKEN');
    navigate('/');
  }

  const logoutFromAllDevices = () => {
    console.log('Vedem ce facem aici');
  }

  return (
    <div>
      <h1>This is my dashboard</h1>
      <h2>This is a protected page and we will see how this goes</h2>
      <button onClick={logout}>This should log me out</button>
      <button onClick={logoutFromAllDevices}></button>
    </div>
  );
};

export default DashboardComponent;
