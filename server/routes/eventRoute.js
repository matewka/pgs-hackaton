'use strict';

const Express = require('express');
const EventService = require('../services/eventService');

const router = Express.Router();

router.ws('/', function(ws, req) {
    ws.on('message', function(msg) {
        EventService.getAll((err, events) => {
            ws.send(JSON.stringify(events));
        });
    });
});

router.ws('/:event_id', function(ws, req) {
    ws.on('message', function(msg) {
        let event_id = req.params.event_id;

        EventService.getEvent(event_id, (err, event) => {
            ws.send(JSON.stringify(event));
        });
    });
});

module.exports = router;
