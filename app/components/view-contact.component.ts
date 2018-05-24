import { Component, OnInit, Input, Inject, OpaqueToken } from "@angular/core";
import { Contact } from "../models/contact";
import { ContactService } from "../services/contact-service";
import { ActivatedRoute, Router } from "@angular/router";

const key = new OpaqueToken("contact-service");
@Component({
    selector: "view-contact",
    templateUrl: "./templates/view-contact.html",
    styles: [
        `
        .reddish {
            color: red;
            background-color: pink;
            border: 1px dashed red;
            border-radius: 5px;
            padding: 5px;
        }
        `

    ]
})
export class ViewContactComponent implements OnInit {

    private contact: Contact = new Contact();

    constructor(private service: ContactService,
        private activatedRoute: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(): void {

        if (window.sessionStorage["contact"]) {
            this.contact = JSON.parse(window.sessionStorage["contact"]);
            delete window.sessionStorage["contact"];
        }
        else {
            this.activatedRoute.params.subscribe(args => {
                this.service.get(args["id"])
                    .subscribe(contact => this.contact = contact);
            });
        }
    }

    deleteContact() {
        if (!confirm("Are you sure?")) return;

        this.service.delete(this.contact.id)
            .subscribe(() => {
                this.router.navigate(["/contact-list"]);
            });
    }

}