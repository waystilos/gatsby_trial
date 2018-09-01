import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div className="root">
    <h1>About Page</h1>
    <p>What a world</p>
    <img src="https://source.unsplash.com/random/500x500" alt="" />
    <div>
      <Link to="/">Home</Link>
    </div>
  </div>
);
