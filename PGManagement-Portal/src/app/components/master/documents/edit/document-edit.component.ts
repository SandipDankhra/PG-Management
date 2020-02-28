import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractDocument } from '../domain/abstract-document';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Document } from '@app/models';

@Component({
    selector: "app-document-edit",
    templateUrl: './document-edit.component.html'
})
export class DocumentEditComponent extends AbstractDocument implements OnInit, OnDestroy {
    document: Document;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.documentFormGroup = this.formBuilder.formGroup(Document,t) as IFormGroup<Document>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
