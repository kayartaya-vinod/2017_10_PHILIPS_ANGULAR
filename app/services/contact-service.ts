import { Contact } from "../models/contact";
import { Injectable, NgModule } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";

// REST service endpoint
const url: string = "http://localhost:4000/contacts/";

@Injectable()
export class ContactService {

    constructor(private http: Http) {
    }

    add(contact: Contact): Observable<Contact> {
        // send a POST request to the rest server with contact as the payload
        return this.http.post(url, contact).map(resp => resp.json() as Contact);
    }

    get(id: number): Observable<Contact> {
        // send a GET request to the url, passing id as a path parameter
        return this.http.get(url + id)
            .map(resp => resp.json() as Contact);
    }

    getAll(): Observable<Contact[]> {
        // send a GET request to the url
        return this.http.get(url).map(resp => resp.json() as Array<Contact>);
    }

    // returns an Observable, that gives the update contact details
    update(contact: Contact): Observable<Contact> {
        // send a PUT request to the rest server 
        // with contact as the payload and id as the path parameter
        return this.http.put(url + contact.id, contact)
            .map(resp => resp.json() as Contact);
    }

    delete(id: number): Observable<any> {
        // send a DELETE request to the url, passing id as a path parameter
        return this.http.delete(url + id);
    }
}


// @NgModule({
//     providers: [
//         ContactService
//     ]
// })
// export class ContactServiceModule { }