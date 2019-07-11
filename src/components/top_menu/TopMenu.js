import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import TopMenuItem from './TopMenuItem';

// The top menu of the site.
// Allows switching between the site's various views.
class TopMenu extends React.Component {
  render() {
    return (


      <Navbar expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            activeKey="calculator"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            <TopMenuItem eventKey="calculator" active="true">
              Calculator
            </TopMenuItem>
            <Nav.Item>
              <Nav.Link className="" eventKey="calculator" as="button">
                Calculator
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="instructions" as="button">
                Instructions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="data" as="button">
                Save/Load Data
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopMenu;
