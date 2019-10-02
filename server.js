var express = require('express');
var app = express();

var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var config = require('./config');

var googleProfile = {};

app.set('view engine', 'pug');
app.set('views', './views');




app.listen(3000);

app.use(function (req, res, next) {

		res.status(404).send('Wybacz nie mogliśmy tego uczynić :)');

});