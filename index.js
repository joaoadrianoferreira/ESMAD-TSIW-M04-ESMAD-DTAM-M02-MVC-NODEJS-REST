const express = require("express"); 
const app = express(); 
const port = 3000;
const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

var students = require('./students/router');
var teatchers = require('./teatchers/router');

app.use(express.json()); 

app.use('/students', students);
app.use('/teatchers', teatchers);

// SEQUELIZE
const sequelize = new Sequelize('joaoferr_dtam', 'joaoferr_dtam', '5SNhnBGKPUJTYy2M', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
});
// TSIW
//const sequelize = new Sequelize('joaoferr_tsiw', 'joaoferr_tsiw', 'GAa8xvmV3eKrVa8C', {
//    host: 'www.joaoferreira.eu',
//    dialect: 'mysql'
//});

sequelize.authenticate().then(function(errors) { 
    if (errors) {
        console.error('Unable to connect to the database:', errors);
    } else {
        console.log('connected to mysql');
    }
 });

// MONGOOSE
mongoose.connect('mongodb+srv://dtam:5SNhnBGKPUJTYy2M@cluster0.wsbmj.mongodb.net/DTAM?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
// TSIW
//mongoose.connect('mongodb+srv://tsiw:GAa8xvmV3eKrVa8C@cluster0.b0vmz.mongodb.net/TSIW?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected to mongoose")
});

app.listen(port, () => {
    console.log("App is running on " + port);
})