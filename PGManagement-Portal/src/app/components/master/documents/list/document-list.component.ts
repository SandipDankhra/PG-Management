import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractDocument } from '../domain/abstract-document';
import { Document } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-document-list",
    templateUrl:'./document-list.component.html'
})
export class DocumentListComponent extends AbstractDocument implements OnInit, OnDestroy {
    documents: List<Document>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Document>) => {
            this.documents = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
