"use strict";


export default {
  path: '/home',


  getComponents(_, callback) {
    require.ensure([], function (require) {
      callback(null, require('./home').default);
    }, 'home');
  },


  childRoutes: [
    require('./routers/A').default,
    require('./routers/B').default,
    require('./routers/C').default
  ]
};