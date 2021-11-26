import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.scss';
import Home from './pages/Home';
import About from './pages/about';
import Table from './components/Table/TableComponent';
import DetailsPage from './components/DetailsPage/DetailsPageComponent';
import Service from './components/Service/ServiceComponent';
import PageTemplate from './templates/PageTemplate';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageTemplate><Home /></PageTemplate>} />
          <Route path="/about" element={<PageTemplate><About /></PageTemplate>} />
          <Route path="/table-page" element={<PageTemplate><Table /></PageTemplate>} />
          <Route path="/details-page" element={<PageTemplate><DetailsPage /></PageTemplate>} />
          <Route path="/service" element={<PageTemplate><Service /></PageTemplate>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
