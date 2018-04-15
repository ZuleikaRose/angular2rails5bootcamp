import {Component} from "@angular/core";
import {Document} from "./document";

@Component({moduleId: module.id, selector: "documents", templateUrl: "documents.component.html"})
export class DocumentsComponent {
    documents: Document[] = [
        {
            title: "My First Doc",
            description: "asdfasdfasdf asdfasd",
            file_url: "https://www.google.com",
            updated_at: "04/16/18",
            image_url: "https://www.google.com",
        }, {
            title: "My First Doc",
            description: "asdfasdfasdf asdfasd",
            file_url: "https://www.google.com",
            updated_at: "04/16/18",
            image_url: "https://www.google.com",
        }, {
            title: "My First Doc",
            description: "asdfasdfasdf asdfasd",
            file_url: "https://www.google.com",
            updated_at: "04/16/18",
            image_url: "https://www.google.com",
        }
    ]
}