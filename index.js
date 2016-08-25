"use strict";
import ReactDom from 'react-dom';
import React from 'react';

require.ensure([], (require) => {

  let App = require('./scripts/app').default;

  ReactDom.render(<App />, document.getElementById('reactContainer'));

}, 'app');



