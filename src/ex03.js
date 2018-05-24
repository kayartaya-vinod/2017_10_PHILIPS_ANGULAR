var myname;
var my_id;
myname = "Vinod";
myname = 100;
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
        this.message = "hello, world!";
    }
    HelloWorld.prototype.sayHello = function () {
        console.log(this.message);
    };
    return HelloWorld;
}());
var hw;
hw = new HelloWorld();
hw.sayHello();
