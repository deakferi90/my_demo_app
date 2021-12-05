import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const DashboardComponent = ({ logOutUser, model, loadCats }) => {
  const navigate = useNavigate();
  const { cats } = model;
  
  const logoutFromAllDevices = () => {
    console.log('ASTA E PENTRU TINE FERY!!! :))))))');
    console.log('SPOR !!!!!!!!');
  }

  return (
    <div>
      <h1>This is my dashboard</h1>
      <h2>This is a protected page and we will see how this goes</h2>
      <button onClick={() => logOutUser(navigate)}>This should log me out</button>
      <button onClick={logoutFromAllDevices}>Logout from all devices</button>
      <button onClick={loadCats}>Test Cats</button>
      {cats.length === 0 && <p>there are no cats in the house</p>}
      {cats.map((cat) => <p key={cat}>{cat}</p>)}
    </div>
  );
};

export default DashboardComponent;
