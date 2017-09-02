var Yeelight = require('node-yeelight');
var y = new Yeelight;

y.on('ready', function() {
    y.discover(); // scan network for active Yeelights
});

y.on('deviceadded', function(device) {
    y.connect(device); // attempt to connect
});

y.on('deviceconnected', function(device) {


    console.log('yeelight connected.');
    //console.log(device);

    // turn Yeelight on/off
    // y.setPower(
    //     device, // device object
    //     true, // device state (true/false)
    //     300 // transition speed in ms
    // );

    // set Yeelight brightness
    // y.setBrightness(
    //     device, // device object
    //     50, // brightness percentage (1-100)
    //     300 // transition speed in ms
    // );

    console.log('device connected');

    var state = true;
    setInterval(function() {
        y.setPower(device, state, 100);

        state = state ? false : true;
    }, 300);

    // function toggle(){
    //     y.setPower(device, state, 2000);
    //     state = state ? false : true;
    //     var gape = Math.random()*20000;
    //     console.log(gape);
    //     setTimeout(function(){
    //         toggle();
    //     }, gape);
    //
    // }
    // toggle();

});
y.listen();
