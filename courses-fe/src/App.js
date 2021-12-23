import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.scss';
import Home from './pages/Home';
import About from './pages/about';
import { LandingPage } from './pages/landingPage';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Dashboard } from './pages/dashboard';
import Table from './components/Table/TableComponent';
import DetailsPage from './components/DetailsPage/DetailsPageComponent';
import Service from './components/Service/ServiceComponent';
//import ProtectedPageTemplate from './templates/ProtectedPageTemplate';
import PageTemplate from './templates/PageTemplate';
import HighCharts from './pages/Highchart/HighchartsComponent';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element = {<Register />}/>
          <Route path="/dashboard" element = {<PageTemplate><Dashboard /></PageTemplate>}/>
          <Route path="/home" element={<PageTemplate><Home /></PageTemplate>} />
          <Route path="/about" element={<PageTemplate><About /></PageTemplate>} />
          <Route path="/table-page" element={<PageTemplate><Table /></PageTemplate>} />
          <Route path="/details-page" element={<PageTemplate><DetailsPage /></PageTemplate>} />
          <Route path="/service" element={<PageTemplate><Service /></PageTemplate>} />
          <Route path="/highcharts" element={<PageTemplate><HighCharts /></PageTemplate>} />
          <Route path="/" element = {<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
