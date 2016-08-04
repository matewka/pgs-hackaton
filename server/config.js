'use strict';

var config = {
  mongodb: {
    uri: 'mongodb://10.10.42.128:27017'
  },

  express: {
    port: 3000,
    secret: 'hyper cat'
  },

  dev: {
    mockdata: true
  }
};

module.exports = config;
