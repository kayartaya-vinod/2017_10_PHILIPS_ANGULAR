// The filename is known as the module name
// this is the module "ex01"

// loads the specified module to the VM
// the loaded module will be cached
var sayHello = require("./say-hello");

console.log("inside the ex01.js");

sayHello();
sayHello("Vinod");
sayHello("Vinod", "Bangalore");
