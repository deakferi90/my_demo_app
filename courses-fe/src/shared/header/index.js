import React from "react";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './style.scss';

const Header = () => {
  const logOutUser = () => {
    localStorage.removeItem('USER');
		const redirectUrl = `/login`; // eslint-disable-line
		window.location = redirectUrl;
	};

    return (
        <Navbar className="color-nav" variant="light" expand="lg">
        <Container className="navbar-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/highcharts">Highcharts</Nav.Link>
              <Nav.Link href="/comments-page">CommentPage</Nav.Link>
              <Nav.Link href="/dropdown-page">DropDownPage</Nav.Link>
              <Nav.Link href="/table-page">Dynamic Table Page</Nav.Link>
              <Nav.Link href="/details-page">Material UI</Nav.Link>
              <Nav.Link href="/service">Service</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              {/* <Nav.Link href="/interview">Interview</Nav.Link> */}
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
        <Nav.Link onClick={() => logOutUser()} className="logout-btn" href="/login">Logout</Nav.Link>
      </Navbar>
    );
}

export default Header;