import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Menu } from '@app/models';
import { AbstractMenu } from '../domain/abstract-menu';

@Component({
    selector: "app-menu-add",
    templateUrl: './menu-add.component.html'
})
export class MenuAddComponent extends AbstractMenu implements OnInit, OnDestroy {
    menu: Menu;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.menu = new Menu();
        this.menuFormGroup = this.formBuilder.formGroup(this.menu) as IFormGroup<Menu>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
