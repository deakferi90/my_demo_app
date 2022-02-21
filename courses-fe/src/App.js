import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.scss';
import Home from './pages/Home';
import About from './pages/about';
import { LandingPage } from './pages/landingPage';
import CommentsPage from './components/CommentsPage/CommentPageContainer';
import DropDownPage from './components/DropDownPage/DropDownPageContainer';
import { Login } from './pages/login';
import { Register } from './pages/register';
import Table from './components/Table/TableComponent';
import DetailsPage from './components/DetailsPage/DetailsPageComponent';
import Service from './components/Service/ServiceComponent';
import ProtectedPageTemplate from './templates/ProtectedPageTemplate';
import HighCharts from './pages/Highchart/HighchartsComponent';
//import InterviewComponent from './components/Interview/InterviewComponent';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element = {<Register />}/>
          <Route path="/home" element={<ProtectedPageTemplate><Home /></ProtectedPageTemplate>} />
          <Route path="/comments-page" element={<ProtectedPageTemplate><CommentsPage /></ProtectedPageTemplate>} />
          <Route path="/dropdown-page" element={<ProtectedPageTemplate><DropDownPage /></ProtectedPageTemplate>} />
          <Route path="/about" element={<ProtectedPageTemplate><About /></ProtectedPageTemplate>} />
          <Route path="/table-page" element={<ProtectedPageTemplate><Table /></ProtectedPageTemplate>} />
          <Route path="/details-page" element={<ProtectedPageTemplate><DetailsPage /></ProtectedPageTemplate>} />
          <Route path="/service" element={<ProtectedPageTemplate><Service /></ProtectedPageTemplate>} />
          <Route path="/highcharts" element={<ProtectedPageTemplate><HighCharts /></ProtectedPageTemplate>} />
          <Route path="/" element = {<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
