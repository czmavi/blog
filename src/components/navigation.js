import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header page-scroll">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">Martin Vích</Link>
      </div>
      <div className="collapse navbar-collapse" id="navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tags">Tags</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);
