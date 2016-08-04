'use strict';

const Express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const WebSocketDispatcher = require('./services/websocketDispatcher');
const EventService = require('./services/eventService');
const MemberService = require('./services/memberService');

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


webSocketDispatcher.register('registerByCode', (err, ws, params) => {

  let code = params.code;

  if (!code) {
    return ws.send(JSON.stringify({error: 'code parameter not provided'}));
  }

  MemberService.updateRegistered(code, true, (err, member) => {

    if (err) {
      ws.send(JSON.stringify(err));
    }
    if (!member) {
      ws.send(JSON.stringify({status: 'failed', error: 'Member not found'}));
    }
    ws.send(JSON.stringify({status: 'ok', member: member}));
  });
});


webSocketDispatcher.register('retrieveByCode', (err, ws, params) => {

  let code = params.code;

  if (!code) {
    return ws.send(JSON.stringify({error: 'code parameter not provided'}));
  }

  MemberService.getByCode(code, (err, member) => {
    console.log(member);
    if (err) {
      ws.send(JSON.stringify(err));
    }

    if (!member) {
      ws.send(JSON.stringify({status: 'failed', error: 'Member not found'}));
    }

    ws.send(JSON.stringify({status: 'ok', member: member}));
  });
});

webSocketDispatcher.register('addMember', (err, ws, params) => {

  let event_id = params.event_id;
  let member = params.member;

  if (!event_id) {
    return ws.send(JSON.stringify({error: 'event_id parameter not provided'}));
  }

  if (!member) {
    return ws.send(JSON.stringify({error: 'event_id parameter not provided'}));
  }

  MemberService.createNew(event_id, member, (err, member) => {

    if (err) {
      ws.send(JSON.stringify(err));
    }
    ws.send(JSON.stringify({status: 'ok', member: member}));
  });
});

if (config.dev.mockdata) {
  require('./util/mockdata')();
}

app.use('/', webSocketDispatcher.rpc());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});