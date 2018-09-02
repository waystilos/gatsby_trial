import React from 'react';
import '../../src/style.css';
import Link from 'gatsby-link';

export default () => (
  <div className="root">
    <h1>Hi, I'm Ardon</h1>
    <div>
      <Link to="/about">About</Link>
    </div>
  </div>
);
