import React, { useState } from 'react';
const ServiceComponent = () => {
  const [count, setCount] = useState(0);

  return (
  <div>
    <h2>ServicePage</h2>
    <div>Count: {count}</div>
    <button onClick={() => {setCount(count + 1)}}>+</button>
    <button onClick={() => {setCount(count - 1)}} >-</button>
  </div>
  )}

export default ServiceComponent;