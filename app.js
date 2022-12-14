require('dotenv').config();
const express = require('express');
const routes = require('./app/config/routes');
var cors = require('cors')

var app = express();

app.use(express.json());
app.use('/user',routes);
app.use(cors());
app.listen(8082);