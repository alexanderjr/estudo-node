const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/config/routes');

//Database connect
mongoose.connect('mongodb://' + process.env.HOST + '/' + process.env.DATABASE, { useNewUrlParser: true});
//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/api', routes);

//Handling errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    res.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message: error.message
        }
    });
});

module.exports = app;