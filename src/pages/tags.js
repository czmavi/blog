import React from 'react';
import Link from 'gatsby-link';

import './tags.css';

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const tags = {};

  posts.forEach(post => {
    if (Array.isArray(post.node.frontmatter.tags)) {
      post.node.frontmatter.tags.forEach(tag => {
        if (!tags[tag]) {
          tags[tag] = 0;
        }

        tags[tag]++;
      });
    }
  });

  return (
    <div className="tags">
      {Object.keys(tags).map(key => (
        <Link key={key} role="button" to={`/tags/${key}`} className="btn btn-default btn-sm">{`${key} (${tags[key]})`}</Link>
      ))}
    </div>
  );
};

export const pageQuery = graphql`
query TagsQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          tags
        }
      }
    }
  }
}
`;
