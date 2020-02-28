import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractNotice } from '../domain/abstract-notice';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Notice } from '@app/models';

@Component({
    selector: "app-notice-edit",
    templateUrl: './notice-edit.component.html'
})
export class NoticeEditComponent extends AbstractNotice implements OnInit, OnDestroy {
    notice: Notice;
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
            this.noticeFormGroup = this.formBuilder.formGroup(Notice,t) as IFormGroup<Notice>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
