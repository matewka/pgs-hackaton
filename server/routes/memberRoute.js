'use strict';

const Express = require('express');

const router = Express.Router();


router.ws('/member', function(ws, req) {
    ws.on('message', function(msg) {
        ws.send(msg);
    });
});

module.exports = router;
