import React from "react";

// importing bootstrap components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// importing corresponding css
import "./Header.css";

// Header Functional Component
function Header() {
  return (
    // Header Container
    <div className="header-container">
      <Navbar className="Navbar" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="./todoIcon.png"
              className="d-inline-block align-top todoIcon"
            />{" "}
            <h1 className="navbar-title">TodoList</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
