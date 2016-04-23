'use strict';

const Express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');

const app = Express();

mongoose.connect(config.mongodb.uri);
let port = process.env.port || config.express.port;

require('express-ws')(app);

const memberRoute = require('./routes/memberRoute');

app.use('/event/:event_id/', memberRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
