import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Document } from '@app/models';
import { AbstractDocument } from '../domain/abstract-document';

@Component({
    selector: "app-document-add",
    templateUrl: './document-add.component.html'
})
export class DocumentAddComponent extends AbstractDocument implements OnInit, OnDestroy {
    document: Document;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.document = new Document();
        this.documentFormGroup = this.formBuilder.formGroup(this.document) as IFormGroup<Document>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
