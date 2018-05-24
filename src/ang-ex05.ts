import { Component, NgModule, enableProdMode, OnInit, Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

enableProdMode();

@Injectable()
class HelloService {
    getData(){
        return "Hello, World!";
    }
}

@Component({
    selector: "my-app",
    template: `
    <h1>Dependency Injection Demo</h1>

    <h3>{{ data }}</h3>
    `
})
class MyAppComponent implements OnInit {
    private data: string;
    
    constructor(private service: HelloService){

    }
    ngOnInit(): void {
        this.data = this.service.getData();
    }
}

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MyAppComponent
    ],
    bootstrap: [
        MyAppComponent
    ],
    providers: [
        HelloService
    ]
})
class MyModule{
}

platformBrowserDynamic().bootstrapModule(MyModule);