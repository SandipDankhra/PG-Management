import { Component, OnInit, OnDestroy } from "@angular/core"
import { CoreComponent } from '@rxweb/angular-router';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';



@Component({
    selector: "app-client-index",
    templateUrl: './client-index.componet.html'
})
export class ClientIndexComponent implements OnInit {

    isLogin: boolean = true;
    constructor(private activateroute: ActivatedRoute, private browserStorage: BrowserStorage, private router: Router) {

    }
    ngOnInit(): void {
        var auth = localStorage.getItem('auth');
        if (auth) {
            this.isLogin = false;
        }

    }
    onLogout() {
        this.browserStorage.local.clearAll();
        location.reload();
    }

}
