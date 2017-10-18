var express = require('express'); // importing express.
var consign = require('consign'); // importing consig.
var bodyParser = require('body-parser'); // importing body-parser.
var expressValidator = require('express-validator'); //importing express validator.

//init modules.

var app = express();

//setting views and engine views.
app.set('view engine', 'ejs');
app.set('views', './app/views');

//seting static files.
app.use(express.static('./app/public'));

//setting body-paerser.
app.use(bodyParser.urlencoded({extended : true}));

//setting express-validator.
app.use(expressValidator());

//setting consign autoload.
consign()
 .include('app/routes')
 .then('app/models')
 .then('app/controllers')
 .into(app);


//exporting object
module.exports = app;