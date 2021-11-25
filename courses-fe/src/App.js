import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.scss';
import Table from './components/Table/TableComponent';
import DetailsPage from './components/DetailsPage/DetailsPageComponent';
import Service from './components/Service/ServiceComponent';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar className="color-nav" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/table-page">Dynamic Table Page</Nav.Link>
              <Nav.Link href="/details-page">Details Page</Nav.Link>
              <Nav.Link href="/service">Service</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <Router>
          <Routes>
            <Route path="/table-page" element={<Table />} />
            <Route path="/details-page" element={<DetailsPage />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
