require('dotenv').config()
const express = require("express"); 
const app = express(); 
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

var students = require('./students/router');
var teatchers = require('./teatchers/router');

app.use(express.json()); 

app.use('/students', students);
app.use('/teatchers', teatchers);

// SEQUELIZE
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

sequelize.authenticate().then(function(errors) { 
    if (errors) {
        console.error('Unable to connect to the database:', errors);
    } else {
        console.log('connected to mysql');
    }
 });

// MONGOOSE
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected to mongoose")
});

app.listen(port, () => {
    console.log("App is running on " + port);
    console.log(process.env.DATABASE, process.env.USER, process.env.PASSWORD, process.env.HOST, process.env.DIALECT)
})