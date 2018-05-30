import React, {Component} from 'react';
import Link from 'gatsby-link';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import './navigation.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  onCollapseButtonClick = () => {
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    const { collapsed } = this.state;
    const collapsibleClass = collapsed ? 'navbar-collapse collapse' : 'navbar-collapse collapse in';
    return (
  <nav className="navbar navbar-default">
    <div className="container">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Martin Vích</Link>
      <button type="button" onClick={this.onCollapseButtonClick} className="navbar-toggle collapsed">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <div className={collapsibleClass}>
      <ul className="nav navbar-nav navbar-right">
        <li role="presentation">
          <Link to="/about">About</Link>
        </li>
        <li role="presentation">
          <Link to="/tags">Tags</Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
  }
}
