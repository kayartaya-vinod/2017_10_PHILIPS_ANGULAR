import { Component, NgModule, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { GreetingsModule } from "./ang-ex03";

@Component({
    selector: "my-app",
    template: `
    <div class='box'>
        <welcome message='Welcome to Ng2 Training'></welcome>
        <welcome message='msg'></welcome>
        <welcome [message]='msg'></welcome>
    </div>
    `,
    styles: [
        `
        .box {
            display: inline-block;
            min-height: 200px;
            min-width: 200px;
            text-align: center;
            border: 1px solid black;
            padding: 10px;
        }
        `
    ]
})
class AppRootComponent {
    private msg: string = "Welcome to Training Day 2";

}

@NgModule({
    imports: [BrowserModule, GreetingsModule],
    declarations: [AppRootComponent],
    bootstrap: [AppRootComponent]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);