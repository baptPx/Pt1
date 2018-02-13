const express = require('express');
const app = express();
const path = require('path');
const mongoC = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const session = require('express-session');
const nodemailer = require('nodemailer');
const url = require('url');
const bcrypt = require('bcrypt');
const saltSize = 10;
const urlD = "mongodb://localhost:27017/peperateDB";
const fs = require('fs');
const http = require('http');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());
app.set('trust proxy', 1);
app.use(session({ // configuration des session
    secret: 'bapt',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false, maxAge: 3600000 }
}))
app.get('/', function(req, res) { //racine, renvoie le site web
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // permet les requetes depuis localhost:3000

  res.sendFile(path.join(__dirname + '/reactapp/build/index.html'));
});

app.use('/static', express.static('reactapp/build/static'));

app.listen(8080, function() {
  console.log("listen !");
});
