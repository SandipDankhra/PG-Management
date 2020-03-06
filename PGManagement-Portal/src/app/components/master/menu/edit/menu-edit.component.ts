import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractMenu } from '../domain/abstract-menu';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute, Router } from '@angular/router';

import { Menu } from '@app/models';
import { route } from '@rxweb/angular-router';

@Component({
    selector: "app-menu-edit",
    templateUrl: './menu-edit.component.html'
})
export class MenuEditComponent extends AbstractMenu implements OnInit, OnDestroy {
    menu: Menu;
    subscription: Subscription;
    id: number;
    isload: boolean;
    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
        super();
        this.activatedRoute.params.subscribe(t => {
            // console.log(t);
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.isload = false;

        this.get({ params: [this.id] }).subscribe(t => {
            console.log(t);
            this.menuFormGroup = this.formBuilder.formGroup(Menu, t) as IFormGroup<Menu>;
            this.isload = true;
        })
    }
    onUpdate() {
        this.patch({ params: [this.id], body: this.menuFormGroup.value }).subscribe(t => {
            if (t == null) {
                this.router.navigate(['menu']);
            }
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
