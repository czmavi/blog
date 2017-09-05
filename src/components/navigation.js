import React from 'react';
import Link from 'gatsby-link';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import './navigation.css';

export default () => (
  <Navbar default={true} collapseOnSelect={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">Martin Vích</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <ul className="nav navbar-nav navbar-right">
        <li role="presentation">
          <Link to="/about">About</Link>
        </li>
        <li role="presentation">
          <Link to="/tags">Tags</Link>
        </li>
      </ul>
    </Navbar.Collapse>
  </Navbar>
);
