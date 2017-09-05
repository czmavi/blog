const path = require('path');

const blogPostTemplate = path.resolve('src/templates/blog-post.js');
const tagTemplate = path.resolve('src/templates/tag-category.js');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
            tags
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      createPostPages(createPage, result.data.allMarkdownRemark.edges, result.data.site.siteMetadata.title);
      createTagPages(createPage, result.data.allMarkdownRemark.edges, result.data.site.siteMetadata.title);
    }
  );
}

const createPostPages = (createPage, posts, siteTitle) => (
  posts
    .forEach(({ node }) => {
      createPage({
        pathValue: node.frontmatter.path,
        path: 'posts' + node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          siteTitle,
        }
      });
    }
  )
);

const createTagPages = (createPage, posts, siteTitle) => {
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
  })

  Object.keys(tags).map(key => (
    createPage({
      name: key,
      path: 'tags/' + key,
      component: tagTemplate,
      context: {
        siteTitle,
        tagName: key,
      }
    })
  ));
};
