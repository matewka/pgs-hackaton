'use strict';

const Express = require('express');
const mongoose = require('mongoose');

const config = require('./config.js');
const dummyRoute = require('./routes/dummy');

mongoose.connect(config.mongodb.uri);
let port = process.env.port || config.express.port;

const app = Express();

app.use('/',  dummyRoute);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
