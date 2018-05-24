import { Component, NgModule, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "my-app",
    template: `
    <h1>Observable Demo</h1>

    <h3>The numbers are..</h3>
    <ul>
        <li *ngFor="let n of numbers">{{n}}</li>
    </ul>

    <button (click)="getMore()">Get more</button>
    <div *ngIf="isComplete">
        No more data available
    </div>
    `
})
class MyAppComponent {
    private data: Observable<number>;
    private numbers: Array<number> = [12, 30];
    private isComplete: boolean = false;
    getMore(){

        this.data = new Observable(observer=>{
            setTimeout(()=>{
                // publish to all subsribers
                observer.next(100);
            }, 1000);

            setTimeout(()=>{
                observer.next(123);
            }, 2000);
            
            setTimeout(()=>{
                // observer.next(22);
                observer.error("Hey this is a deliberate error!");
            }, 3000);
            
            setTimeout(()=>{
                observer.complete();
            }, 4000);
            
        });

        this.data.subscribe(num=>{
            console.log("Got a new number", num);
        });

        this.data.subscribe(num=>{
            this.numbers.push(num);
        }, err=>{
            // handle any errors from the observable
            console.error(err);
        }, ()=>{
            // only when there were no errors!
            // handle the completion of observable
            this.isComplete = true;
        });

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