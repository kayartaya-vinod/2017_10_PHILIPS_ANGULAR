// a module can export only one member

var { sleep } = require("./vinutils");

module.exports = function (name = "friend", city = 'your city') {
    sleep(2000);
    console.log(`Hello ${name}, how's weather in ${city}`);
};