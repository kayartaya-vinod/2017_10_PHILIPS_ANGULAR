import { Component, NgModule, Input, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: "hello",
    template: "<h1>{{message}}</h1>"
})
class HelloComponent {
    private message: string = "Hello, World!";
}

@Component({
    selector: "welcome",
    template: "<h1>{{message}}</h1>"
})
class WelcomeComponent implements OnInit, OnDestroy {

    // allows the variables value to be changed at the usage of the component
    // one-way data binding from parent component to the child component
    // <welcome message="some value here"></welcome>
    // <welcome [message] = "some-parent-component-variable-here"></welcome>

    @Input()
    private message: string = "Welcome to Angular!";

    constructor() {
        console.log("a new WelcomeComponent instnatiated!");
    }

    ngOnInit(): void {
        console.log("WelcomeComponent.ngOnInit() called");
    }

    ngOnDestroy(): void {
        console.log("WelcomeComponent.ngOnDestroy() called");
    }
}

@NgModule({
    declarations: [HelloComponent, WelcomeComponent],
    exports: [HelloComponent, WelcomeComponent]
})
export class GreetingsModule { }