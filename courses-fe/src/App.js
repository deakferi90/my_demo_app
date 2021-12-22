import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
import PageTemplate from './templates/PageTemplate';
import ProtectedPageTemplate from './templates/ProtectedPageTemplate';
import HighCharts from './pages/Highchart/HighchartsComponent';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element = {<Register />}/>
          <Route path="*" element = {<ProtectedPageTemplate><LandingPage /></ProtectedPageTemplate>}/>
          <Route path="/dashboard" element = {<ProtectedPageTemplate><Dashboard /></ProtectedPageTemplate>}/>
          <Route path="/home" element={<ProtectedPageTemplate><Home /></ProtectedPageTemplate>} />
          <Route path="/about" element={<ProtectedPageTemplate><About /></ProtectedPageTemplate>} />
          <Route path="/table-page" element={<ProtectedPageTemplate><Table /></ProtectedPageTemplate>} />
          <Route path="/details-page" element={<ProtectedPageTemplate><DetailsPage /></ProtectedPageTemplate>} />
          <Route path="/service" element={<ProtectedPageTemplate><Service /></ProtectedPageTemplate>} />
          <Route path="/highcharts" element={<ProtectedPageTemplate><HighCharts /></ProtectedPageTemplate>} />
          <Route path="/" element={<Navigate to ="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
