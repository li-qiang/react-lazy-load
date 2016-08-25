"use strict";
import React from 'react';
import {Router} from 'react-router';
import routers from './routers';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return <Router  children={routers}/>;
  }
};