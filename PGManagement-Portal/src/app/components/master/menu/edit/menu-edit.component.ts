import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractMenu } from '../domain/abstract-menu';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Menu } from '@app/models';

@Component({
    selector: "app-menu-edit",
    templateUrl: './menu-edit.component.html'
})
export class MenuEditComponent extends AbstractMenu implements OnInit, OnDestroy {
    menu: Menu;
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
            this.menuFormGroup = this.formBuilder.formGroup(Menu,t) as IFormGroup<Menu>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
