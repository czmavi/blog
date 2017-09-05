import React from 'react';
import Link from 'gatsby-link';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import './navigation.css';

export default () => (
  <Navbar fixedTop={true} default={true} collapseOnSelect={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">Martin Vích</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight={true}>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/tags">Tags</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
