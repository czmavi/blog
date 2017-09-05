module.exports = {
  siteMetadata: {
    title: `Martin Vích's blog`,
    description: `Personal blog of one IT guy.`,
    siteUrl: `https://www.martinvich.net`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: {
                    frontmatter: { draft: { ne: true } }
                  }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: `/rss.xml`,
            setup: ({ query: { site: { siteMetadata } } }) => {
              return {
                title: siteMetadata.title,
                description: siteMetadata.description,
                feed_url: siteMetadata.siteUrl + `/rss.xml`,
                site_url: siteMetadata.siteUrl,
                generator: `GatsbyJS`,
              }
            },
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(({ node }) => {
                return {
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  url: site.siteMetadata.siteUrl + '/posts' + node.path,
                  custom_elements: [{ "content:encoded": node.html }],
                  author: 'Martin Vích',
                }
              }),
          },
        ],
      },
    },
  ],
};
