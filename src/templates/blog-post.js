import React from 'react';
import Helmet from 'react-helmet';

export default ({
  data,
  pathContext,
}) => {
  const { markdownRemark: post } = data;
  return (
    <div className="blog-post-container">
      <Helmet title={`${pathContext.siteTitle} | ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
query BlogPostByPath($pathValue: String!) {
  markdownRemark(frontmatter: { path: { eq: $pathValue } }) {
    html
    id
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      path
      tags
    }
  }
}
`;
