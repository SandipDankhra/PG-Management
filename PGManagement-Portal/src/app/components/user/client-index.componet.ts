import { Component, OnInit, OnDestroy } from "@angular/core"
import { CoreComponent } from '@rxweb/angular-router';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { ReviewLookup } from '@app/models';
import { List } from '@rxweb/generics';
import { Subscription } from 'rxjs';
import { AbstractReview } from '../master/reviews/domain/abstract-review';

@Component({
    selector: "app-client-index",
    templateUrl: './client-index.componet.html',
    styleUrls: ['review.css'],
    entryComponents: []
})
export class ClientIndexComponent extends AbstractReview implements OnInit {
    reviews: List<ReviewLookup>;
    isLogin: boolean = true;
    subscription: Subscription;

    constructor(private activateroute: ActivatedRoute, private browserStorage: BrowserStorage, private router: Router) {
        super();
    }
    ngOnInit(): void {
        var auth = this.browserStorage.local.get('auth', false);
        if (auth) {
            this.isLogin = false;
        }
        this.viewReview();
    }

    viewReview() {

        this.subscription = this.get().subscribe((t: List<ReviewLookup>) => {
            console.log(t);
            this.reviews = t;
        })

    }

    onLogout() {
        this.browserStorage.local.clearAll();
        location.reload();
    }

}
