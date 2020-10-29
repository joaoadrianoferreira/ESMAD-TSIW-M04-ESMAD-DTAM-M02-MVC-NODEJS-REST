const express = require("express"); 
const app = express(); 
const port = 3000;
const mongoose = require('mongoose');

var students = require('./students/router');
var teatchers = require('./teatchers/router');

app.use(express.json()); 

app.use('/students', students);
app.use('/teatchers', teatchers);

app.listen(port, () => {
    console.log("App is running on " + port)

    mongoose.connect('mongodb+srv://dtam:5SNhnBGKPUJTYy2M@cluster0.wsbmj.mongodb.net/DTAM?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("connected")
    });

})