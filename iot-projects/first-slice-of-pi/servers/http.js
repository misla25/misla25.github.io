var sensorRoutes = require('./../routes/sensors');
var actuatorRoutes = require('./../routes/actuators');
const express = require('express'),
	cors = require('cors');
	
var app = express();

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


// I have looked through all files
