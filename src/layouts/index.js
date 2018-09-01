import React from 'react';
import '../../src/layouts/style.css';

export default ({ children }) => (
  <div className="root__children">{children()}</div>
);
