// ex02.js

var os = require("os");
var path = require("path");

console.log("typeof os is", typeof os);
console.log("typeof path is", typeof path);

console.log("Start of script!");

var fn = ()=>{
    console.log(`Waited for ${dur} millis`);
};


setTimeout(()=>{
    console.log(`Waited for 2000 millis`);
}, 2000);

require("./vinutils").execAfterDelay(()=>{
    console.log(`Waited for 5000 millis`);
}, 5000);


console.log("End of script!");