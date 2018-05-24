import { Component, NgModule, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

enableProdMode();

@Component({
    selector: "my-app",
    template: `<h1>{{message}}</h1>`
})
class MyAppComponent {

    private message: string;

    constructor(){
        this.message = "Angular2 is Cool!!";
    }
}


@NgModule({
    imports: [
        BrowserModule
    ],
    // all components, pipes, directives etc should be listed here
    declarations: [
        MyAppComponent
    ],
    // all the components that needs to be used in the index.html
    bootstrap: [
        MyAppComponent
    ]
})
class MyModule{
}

platformBrowserDynamic().bootstrapModule(MyModule);