import React, { useEffect, useState } from 'react';
import './style.scss';
import { getData } from './api';

const ServiceComponent = () => {
  const [count, setCount] = useState(0);
  const [randomUSerDataJSON, setRandomUSerDataJSON] = useState('');

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  useEffect(()=> {
    getData().then((randomData) => {
      setRandomUSerDataJSON(randomData);
    });
  }, []);

  return (
    <div className='display'>
      <div>
        <h2>ServicePage</h2>
        <div>Count: {count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement} >-</button>
      </div>
      <div className='api-data'>
        <p>This is just plain API data</p>
        <p>{randomUSerDataJSON}</p>
      </div>
    </div>
  )
}

export default ServiceComponent;
