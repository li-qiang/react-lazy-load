"use strict";

import React from 'react';

export default class Home extends React.Component {
  render() {
    return <div>
      <h1>Hello Home</h1>
      <div>{this.props.children}</div>
    </div>;
  }
}