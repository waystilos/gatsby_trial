import React from 'react';
import '../../src/style.css';
import Link from 'gatsby-link';

export default () => (
  <div className="root">
    <h1>Hello Gatsby!</h1>
    <p>What a world</p>
    <div className="root__photos">
      <img src="https://source.unsplash.com/random/500x500" alt="" />
    </div>

    <div>
      <Link to="/page-2/">Link</Link>
    </div>
    <div>
      <Link to="/about">About</Link>
    </div>
  </div>
);
