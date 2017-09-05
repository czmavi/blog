import React from 'react';

export default () => (
  <header className="intro-header" id="intro-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg" className="img-responsive center-block" width="150px"
            height="150px">
            <defs>
              <pattern id="image" x="0" y="0" patternUnits="userSpaceOnUse" width="150" height="150">
                <image x="0" y="0" width="150" height="150" xlinkHref="/img/logo_MV_noname.png"></image>
              </pattern>
            </defs>
            <rect id="bg" x="0" y="0" width="150" height="150" fill="url(#image)" />
            <text x="75" y="124" textAnchor="middle" fill="#2E475B" fontSize="16" id="name">Martin Vích</text>
          </svg>
          <div className="site-heading">
            <h1>Martin Vích's blog</h1>
            <hr className="small" />
            <span className="subheading">
              Hi I'm Martin Vích. For a long time I was working as a ASP.NET developer, now I'm focusing mainly on the front end.
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
);
