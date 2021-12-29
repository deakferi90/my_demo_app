import React, { useEffect, useState } from 'react';
import './style.scss';
import { getData } from './api';

const ServiceComponent = () => {
  const [count, setCount] = useState(0);
  const [randomUSerDataJSON, setRandomUSerDataJSON] = useState('');

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
        <button onClick={() => { setCount(count + 1) }}>+</button>
        <button onClick={() => { setCount(count - 1) }} >-</button>
      </div>
      <div>
        <p>{randomUSerDataJSON}</p>
      </div>
    </div>
  )
}

export default ServiceComponent;
