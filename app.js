var bodyParser = require('body-parser');
var config = require('config');
var express = require('express');
var log = require('debug')('billtracker:root');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();

router.get('/', function(req, res) {
	res.send('Hello World!');
});

app.use(router);
app.use(bodyParser.json());

routes = require('./lib/bill/billRoutes')(app);

var databaseURL = config.mongoUrl;
mongoose.connect(databaseURL, function(err, res) {
	if (err) {
		log('ERROR: connecting to Database. ' + err);
	} else {
		log('Connected to database ' + databaseURL);
		var portNumber = config.port || 3000;
		app.listen(portNumber, function() {
			log('BillTracker server running on http://localhost:' + portNumber);
		});
	}
});