import React from "react";
import { useNavigate } from 'react-router-dom';

const DashboardComponent = ({ logOutUser }) => {
  const navigate = useNavigate();

  
  const logoutFromAllDevices = () => {
    console.log('Vedem ce facem aici');
  }

  return (
    <div>
      <h1>This is my dashboard</h1>
      <h2>This is a protected page and we will see how this goes</h2>
      <button onClick={() => logOutUser(navigate)}>This should log me out</button>
      <button onClick={logoutFromAllDevices}>Logout from all devices</button>
    </div>
  );
};

export default DashboardComponent;
