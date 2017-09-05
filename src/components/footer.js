import React from 'react';

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <p className="logo"><img src="/img/logo_MV_bw.png" width="41" height="40" /> Martin Vích</p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Martin Vích
                    <br />
            <a href="/feed.rss"><i className="fa fa-rss"></i> RSS Feed</a> | <a href="/feed.atom"><i className="fa fa-rss"></i> Atom Feed</a>
          </p>
        </div>
        <div className="col-md-4">
          <p>Find me at</p>
          <p className="contact_icons">
            <a href="https://www.facebook.com/martin.vich.5" rel="noopener" target="_blank"><img src="/img/fb_ico.png" /></a>
            <a href="https://cz.linkedin.com/in/vichmartin" rel="noopener" target="_blank"><img src="/img/linkedin_ico.png" /></a>
            <a href="https://twitter.com/MaVi_cz" rel="noopener" target="_blank"><img src="/img/twitter_ico.png" /></a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
