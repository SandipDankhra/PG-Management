import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Document } from '@app/models';
import { AbstractDocument } from '../domain/abstract-document';

import { DocumentTypeEnum } from "src/app/enums/document-type.enum";



@Component({
    selector: "app-document-add",
    templateUrl: './document-add.component.html'

})
export class DocumentAddComponent extends AbstractDocument implements OnInit, OnDestroy {
    document: Document;
    keys: any[];
    subscription: Subscription;
    documentTypeEnum: any;
    result: any;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {

        this.documentTypeEnum = DocumentTypeEnum;
        console.log(this.documentTypeEnum);
        this.keys = Object.keys(this.documentTypeEnum).filter(Number);

        this.document = new Document();
        this.documentFormGroup = this.formBuilder.formGroup(this.document) as IFormGroup<Document>;
    }
    onUpload() {
        this.get().subscribe(t => { console.log(t) })
        this.document.userId = 5;
        this.document.documentUrl = "hello";
        this.post({ body: this.document }).subscribe(t => {
            console.log(t);
            this.result = t;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
