import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './_style.scss';


const fetchData = () => {
  return axios.get('https://randomuser.me/api/?results=20')
    .then((res) => {
      const { results } = res.data;
      console.log(results);
      return results;
    })
    .catch((err) => {
      console.error(err);
    })
}

const InterviewComponent = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchData().then(dataPeople => {
      setPeople(dataPeople);
    });
  }, [])
  //const fetchDataObj = fetchData();
  return (
    <div>
      <h2>InterviewPage</h2>
      <table>
        <tr>{people.map((person, personId) => <div key={personId}>
          {person.location.city}
          </div>)}
        </tr>
      </table>
    </div>
  )
}

export default InterviewComponent;