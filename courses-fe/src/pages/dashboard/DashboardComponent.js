import React from "react";
import { useNavigate } from 'react-router-dom';

const DashboardComponent = ({ logOutUser, model, loadCats, loadDogs }) => {
  const navigate = useNavigate();
  const { cats } = model;
  console.log(cats);
  const { dogs } = model;
  console.log(dogs);
  
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
      <button onClick={loadDogs}>Test Dogs</button>
      {cats.map((cat) => <p key={cat}>{cat}</p>)}
      {dogs.map((dog) => <p key={dog}>{dog}</p>)}
    </div>
  );
};

export default DashboardComponent;
