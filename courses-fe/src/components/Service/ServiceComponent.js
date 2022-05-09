import React, { useEffect, useState } from "react";
import "./style.scss";
import { getData } from "./api";
import { data } from "./data";

const ServiceComponent = () => {
  const [count, setCount] = useState(0);
  const [randomUSerDataJSON, setRandomUSerDataJSON] = useState("");
  const [valueText, setValueText] = useState("");
  const [comments, setComments] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const getInputValue = (value) => {
    setValueText(value);
  };

    const addText = () => {
      const newComments = [...comments, valueText];
      setComments(newComments);
    };

  useEffect(() => {
    getData().then((randomData) => {
      setRandomUSerDataJSON(randomData);
    });
  }, []);

  return (
    <div className="display">
      <div>
        <h2>ServicePage</h2>
        <div>Count: {count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div className="api-data">
        <p>This is just plain API data</p>
        <p>{randomUSerDataJSON}</p>
      </div>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by..."
        />
      </div>
      <ul className="list-container">
        {comments
          .filter((item) => {
            if (searchTerm === "") {
              return item;
            } else if (
              item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((filteredNames) => (
            <li key={filteredNames}>{filteredNames}</li>
          ))}
      </ul>
      <div className="adding-text">
        <input onChange={(e) => getInputValue(e.target.value)} type="text" className="input-box" />
        <button onClick={addText}>Add Text</button>
      </div>
    </div>
  );
};

export default ServiceComponent;
