import React from 'react';
import Link from 'gatsby-link';

export default ({ path, title, date, excerpt}) => (
  <div className="post-preview">
    <h2 className="post-title">
      <Link to={path}>{title}</Link>
    </h2>
    <p className="post-meta">{date}</p>
    <p>{excerpt}</p>
  </div>
);
