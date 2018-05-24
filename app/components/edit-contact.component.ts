import { OnInit, Component } from "@angular/core";
import { Contact } from "../models/contact";
import { ContactService } from "../services/contact-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: "./templates/contact-form.html",
    styles: [
        `
        .reddish {
            color: pink;
            background-color: red;
            border: 1px dashed pink;
            border-radius: 5px;
            padding: 5px;
        }
        `

    ]
})
export class EditContactComponent implements OnInit {

    private contact: Contact;
    private pageTitle: string = "Edit contact details";

    constructor(private service: ContactService,
        private activatedRoute: ActivatedRoute,
        private router: Router) {
        this.contact = new Contact();
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.service.get(params["id"]).subscribe(contact => {
                this.contact = contact;
                this.pageTitle = `Edit contact details of ${contact.firstname} ${contact.lastname}`;
            });
        });
    }

    save(): void {
        this.service.update(this.contact)
            .subscribe(c => {
                this.router.navigate(["/view-contact", c.id]);
            });
    }

}