import { OnInit, Component } from "@angular/core";
import { Contact } from "../models/contact";
import { ContactService } from "../services/contact-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: "./templates/contact-form.html"
})
export class AddContactComponent implements OnInit {

    private contact: Contact;

    constructor(private service: ContactService,
        private router: Router) {
        this.contact = new Contact();
    }

    ngOnInit(): void {
    }

    save(): void {
        this.service.add(this.contact)
            .subscribe(c => {
                this.router.navigate(["/view-contact", c.id]);
            });

    }

}