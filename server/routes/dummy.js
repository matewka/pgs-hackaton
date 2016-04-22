'use strict';

const express = require('express');

var router = express.Router();

router.get('/', (request, response, next) => {

    response.json({status:200});
});


module.exports = router;
