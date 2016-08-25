"use strict";

export default {
  path: 'b',

  getIndexRoute(partialNextState, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require('./b').default
      })
    }, 'home.b')
  }
};