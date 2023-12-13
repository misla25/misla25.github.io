var converter = require('./../middleware/converter');
var bodyParser = require('body-parser');

const express = require('express'),
	cors = require('cors');
	var sensorRoutes = require('./../routes/sensors');
var actuatorRoutes = require('./../routes/actuators');

var app = express();

app.use(bodyParser.json());

module.exports = app;


app.use(cors());

app.use('/pi/sensors', sensorRoutes);
app.use('/pi/actuators',actuatorRoutes );

app.get('/',function(req, res){
	res.send("some response for accessing the gateway");
	});

app.get('/pi',function(req,res){
	res.send("some response for accessing the gateway");
	});

app.use(converter());
module.exports = app;
// I have looked through all files

