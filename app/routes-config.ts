import { ContactListComponent } from "./components/contact-list.component";
import { ViewContactComponent } from "./components/view-contact.component";
import { EditContactComponent } from "./components/edit-contact.component";
import { AddContactComponent } from "./components/add-contact.component";

export const routesConfig = [
    {
        path: "new-contact",
        component: AddContactComponent
    },
    {
        path: "contact-list",
        component: ContactListComponent
    },
    {
        path: "view-contact/:id",
        component: ViewContactComponent
    },
    {
        path: "edit-contact/:id",
        component: EditContactComponent
    },
    {
        path: "",
        redirectTo: "contact-list",
        pathMatch: "full"
    }
];