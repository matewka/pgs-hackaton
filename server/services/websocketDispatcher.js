'use strict';

const ExpressWS = require('express-ws');
const Express = require('express');

class WebSocketDispatcher {

  constructor(expressApp) {
    console.log("Websocket dispatcher created");

    this.webSockets = ExpressWS(expressApp);
    this.router = Express.Router();
    this.methods = {};

    this.router.ws('/', (ws, req) => {
      console.log('Socket Connected');

      ws.on('message', (msg) => this.handleRequest(msg, ws, req));
    });
  }

  handleRequest(msg, ws, req) {

    let data;
    try {
       data = JSON.parse(msg);
    }
    catch (e) {
      return ws.send(JSON.stringify({error: 'Proper json please'}));
    }

    if (!data.method) {
      return;
    }

    let method_name = data.method;

    if (!this.methods[method_name]) {
      return ws.send(JSON.stringify({error: 'Method not registered'}));
    }

    let method_desc = this.methods[method_name];
    let params = data.params || [];

    if (method_desc.isSync) {
      let response = method_desc.callback(null, params);
      return ws.send(JSON.stringify(response));
    }
    else {
      return method_desc.callback(null, ws, params);
    }
  }

  registerSync(name, callback) {
    this.methods[name] = {
      isSync: true,
      callback: callback
    };
  }

  register(name, callback) {
    this.methods[name] = {
      isSync: false,
      callback: callback
    };
  }

  rpc() {
    return this.router;
  }
}

module.exports = WebSocketDispatcher;

