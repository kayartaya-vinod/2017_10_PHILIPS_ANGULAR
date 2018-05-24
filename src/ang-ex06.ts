import { Component, NgModule, enableProdMode, Injectable, Inject, OpaqueToken, InjectionToken } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

enableProdMode();

const token = new InjectionToken("kannada.service");

interface HelloService {
    getHelloMessage();
}

@Injectable()
class EnglishHelloService implements HelloService{
    getHelloMessage() {
        return "Hello, World!";
    }
}

@Injectable()
class SpanishHelloService implements HelloService{
    getHelloMessage() {
        return "Hola, Munda!";
    }
}

@Component({
    selector: "my-app",
    template: `<h1>Dependency Injection Demo</h1>
        <h3>{{ message }}
    `
})
class MyAppComponent {

    private message: string;

    constructor(@Inject(token) private service: HelloService){
    }

    // constructor(@Inject("english") private service: HelloService){
    // }

    // constructor(@Inject("spanish") private service: HelloService){
    // }    
    ngOnInit(){
        this.message = this.service.getHelloMessage();
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
        {
            provide: "english", useClass: EnglishHelloService
        },
        {
            provide: "spanish", useClass: SpanishHelloService
        },
        {
            provide: token,
            useValue: {
                getHelloMessage: ()=>"ಹಲೋ ವರ್ಲ್ಡ್"
            }
        }
    ]
})
class MyModule{
}

platformBrowserDynamic().bootstrapModule(MyModule);