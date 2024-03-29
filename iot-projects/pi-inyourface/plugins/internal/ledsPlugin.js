const resources = require('./../../resources/model');

let actuator1, actuator2;
let model = resources.pi.actuators.leds;
let pluginName = resources.pi.actuators.leds[1].name + ", " + resources.pi.actuators.leds[2].name;

exports.start = function (params) {
	connectHardware();
	console.log("starting " + pluginName + " plugin");
};

// TODO 1: Complete the ledsPlugin!
function connectHardware(){
	const Gpio = require('onoff').Gpio;
	sensor = new Gpio(model.gpio, 'in', 'both');
	sensor.watch(function (err, value) {
		if (err){} // handle error
		else {}    // handle non-error signals
	});

	actuator1 = new Gpio(model.gpio, 'out');
	actuator2 = new Gpio(model.gpio,'out');
}