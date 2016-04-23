'use strict';

const Express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const WebSocketDispatcher = require('./services/websocketDispatcher');
const EventService = require('./services/eventService');

const app = Express();

mongoose.connect(config.mongodb.uri);
let port = process.env.port || config.express.port;

let webSocketDispatcher = new WebSocketDispatcher(app);


webSocketDispatcher.register('getEvents', (err, ws) => {
  EventService.getAll((err, events) => {
    ws.send(JSON.stringify(events));
  });
});


webSocketDispatcher.register('getEvent', (err, ws, params) => {

  let id = params.id;
  if (!id) {
    return ws.send(JSON.stringify({error: 'id parameter not provided'}));
  }

  EventService.getEvent(id, (err, events) => {
    ws.send(JSON.stringify(events));
  });
});


app.use('/', webSocketDispatcher.rpc());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});