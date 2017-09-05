import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Navigation from '../components/navigation';
import Header from '../components/header';
import Footer from '../components/footer';

const TemplateWrapper = ({ children, data }) =>
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'application-name', content: 'Martin Vích\'s blog' },
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'msapplication-tooltip', content: 'Martin Vích\'s blog' },
        { name: 'msapplication-starturl', content: '/' },
      ]}
    >
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.png" />
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
      <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
      <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
          rel='stylesheet' type='text/css' />
      <link href="/css/highlight.css" rel="stylesheet" />
      <link href="/css/clean-blog.css" rel="stylesheet" />
      <link href="/css/master.css" rel="stylesheet" />
      <link href="/css/override.css" rel="stylesheet" />
    </Helmet>
    <Navigation />
    <Header />
    <div className="container">
      {children()}
    </div>
    <hr />
    <Footer />
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
