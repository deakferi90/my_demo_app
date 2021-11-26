import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.scss';
import Home from './pages/Home';
import About from './pages/about';
import Table from './components/Table/TableComponent';
import DetailsPage from './components/DetailsPage/DetailsPageComponent';
import Service from './components/Service/ServiceComponent';
import Header from './shared/header';
//import PageRoute from './templates/PageRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/table-page" element={<Table />} />
          <Route path="/details-page" element={<DetailsPage />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
