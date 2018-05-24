import { OnInit, Component } from "@angular/core";
import { Contact } from "../models/contact";
import { ContactService } from "../services/contact-service";

@Component({
    selector: "contact-list",
    templateUrl: "./templates/contact-list.html"
})
export class ContactListComponent implements OnInit {

    private contactList: Array<Contact>;
    private selectedContact: Contact = new Contact();

    constructor(private service: ContactService) {
    }

    ngOnInit(): void {
        this.service.getAll().subscribe(data => this.contactList = data);
        // delete window.sessionStorage["contact"];
    }

    saveInSession(c: Contact): void {
        window.sessionStorage["contact"] = JSON.stringify(c);
    }

}