import React from 'react';

import './display.css';

const Display = ({count, sum}) => (
  <div id='display'>
    <div id='displayCount'>{count ? count : '0'}</div>
    <div id='displaySum'>{sum}</div>
  </div>
);

export default Display;