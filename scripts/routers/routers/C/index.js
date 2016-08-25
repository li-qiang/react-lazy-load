"use strict";

export default {
  path: 'c',

  getIndexRoute(partialNextState, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require('./c').default
      })
    }, 'home.c');
  }
};