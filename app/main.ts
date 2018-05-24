// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-loader";

import { NgModule, OpaqueToken } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AddressBookComponent } from "./components/address-book.component";
import { AppHeaderComponent } from "./components/app-header.component";
import { AppFooterComponent } from "./components/app-footer.component";
import { ViewContactComponent } from "./components/view-contact.component";
import { TitlePipe, AgePipe } from "./pipes/pipes";
import { ContactService } from "./services/contact-service";
import { ContactListComponent } from "./components/contact-list.component";
import { routesConfig } from "./routes-config";
import { EditContactComponent } from "./components/edit-contact.component";
import { AddContactComponent } from "./components/add-contact.component";

import "./styles/default.css";

import { FilterPipe } from "./pipes/FilterPipe";

@NgModule({
    declarations: [
        // all components, directives, pipes will be listed here
        AddressBookComponent,
        AppHeaderComponent,
        AppFooterComponent,
        ViewContactComponent,
        ContactListComponent,
        EditContactComponent,
        AddContactComponent,
        TitlePipe,
        AgePipe,
        FilterPipe
    ],
    bootstrap: [
        // only the components used in the index.html will be listed here
        AddressBookComponent
    ],
    imports: [
        // list all @NgModule classes that this module depends on
        BrowserModule,
        FormsModule,
        HttpModule,
        //ContactServiceModule,
        RouterModule.forRoot(routesConfig, { useHash: true })
    ],
    providers: [
        ContactService
        // list all injectables here (usually services)
        // all injectables are singletons and are lazily initialized
        // ContactService // now this is part of "ContactServiceModule"
    ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);