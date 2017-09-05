import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const PostPreview = ({ path, title, date, excerpt}) => (
  <div className="post-preview">
    <h2 className="post-title">
      <Link to={path}>{title}</Link>
    </h2>
    <p className="post-meta">{date.toLocaleDateString()}</p>
    <p>{excerpt}</p>
  </div>
);
PostPreview.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default PostPreview;
