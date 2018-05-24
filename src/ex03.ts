var myname: any;
var my_id: number;

myname = "Vinod";
myname = 100;

class HelloWorld {
    private message: string;

    constructor() {
        this.message = "hello, world!";
    }
    sayHello() {
        console.log(this.message);
    }
}

var hw: HelloWorld;

hw = new HelloWorld();
hw.sayHello();