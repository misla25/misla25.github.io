const onoff = require('onoff');

const Gpio = onoff.Gpio;
const led1 = new Gpio(16, 'out');
const led1twice = new Gpio(17,'out');
const led2 = new Gpio(21, 'out');

let interval;

interval = setInterval(function () {
  const value = (led1.readSync() + 1)% 2;
  led1.write(value, function() {
    console.log("Changed LED 1 state to: " + value);
  });
  led1twice.write((value + 1) % 2, function(){
    console.log("Changed LED 1 state to: " + value);
  });
  led2.write((value + 1) % 2, function() {
    console.log("Changed LED 2 state to: " + ((value + 1) % 2));
  });


}, 800);

process.on('SIGINT', function () {
  clearInterval(interval);
    led1.writeSync(0); 
led1.unexport(); 
led1twice.writeSync(2);
led1twice.unexport();
 led2.writeSync(0);
  led2.unexport();
  console.log('Bye, bye!');
  process.exit();
});

