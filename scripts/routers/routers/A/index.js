"use strict";

export default {
  path: 'a',

  getIndexRoute(partialNextState, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require('./a').default
      })
    }, 'home.a')
  }
};