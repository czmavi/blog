import React from 'react';
import Helmet from 'react-helmet';

import PostPreview from '../components/postPreview';

export default ({ data, pathContext }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet title={`${pathContext.siteTitle} | ${pathContext.tagName}`} />
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <PostPreview
              key={post.frontmatter.path}
              path={post.frontmatter.path}
              title={post.frontmatter.title}
              date={new Date(post.frontmatter.date)}
              excerpt={post.excerpt}
            />
          );
        })}
    </div>
  );
};

export const pageQuery = graphql`
query TagByNameQuery($name: String!) {
  allMarkdownRemark(
    filter: { frontmatter: { tags: { in: [$name] } } }
    sort: { order: DESC, fields: [frontmatter___date] }
  ) {
    totalCount
    edges {
      node {
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
          path
        }
      }
    }
  }
}
`;
