var http     = require('http');
var express  = require('express');
var session  = require('express-session');
var app      = express();
var bparser  = require('body-parser')
var path     = require('path');
var mongo    = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

app.use(bparser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine','ejs');

app.listen(process.env.PORT || 8080, function() {
    console.log('Escuchando...');
});

app.get('/',(req,res) => {
    res.render('home');
});
