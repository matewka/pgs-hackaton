'use strict';

const Express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');

const app = Express();

mongoose.connect(config.mongodb.uri);
let port = process.env.port || config.express.port;

require('express-ws')(app);

const eventRoute = require('./routes/eventRoute');

app.use('/event', eventRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});