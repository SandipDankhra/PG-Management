import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Notice } from '@app/models';
import { AbstractNotice } from '../domain/abstract-notice';
import { Router } from '@angular/router';

@Component({
    selector: "app-notice-add",
    templateUrl: './notice-add.component.html'
})
export class NoticeAddComponent extends AbstractNotice implements OnInit, OnDestroy {
    notice: Notice;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder, private router: Router) {
        super();

    }

    ngOnInit(): void {
        this.notice = new Notice();
        this.noticeFormGroup = this.formBuilder.formGroup(this.notice) as IFormGroup<Notice>;
    }
    submit() {
        this.post({ body: { noticeDescription: this.noticeFormGroup.controls.noticeDescription.value } }).subscribe(t => {
            console.log(t);
            this.router.navigateByUrl('/notices');
        });
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
