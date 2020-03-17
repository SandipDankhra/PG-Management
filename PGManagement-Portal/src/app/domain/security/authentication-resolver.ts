import { Injectable } from '@angular/core';
import { IAuthResolver, CoreComponent } from '@rxweb/angular-router'
import { BrowserStorage } from '../services/browser-storage';
import { RxHttp } from '@rxweb/http';

@Injectable({
    providedIn: 'root',
})
export class AuthResolver extends CoreComponent implements IAuthResolver {

    constructor(private storageData: BrowserStorage, private http: RxHttp) {
        super();
    }
    resolveAuth(): Promise<{ [key: string]: any; }> | { [key: string]: any; } {
        var promise = new Promise<{ [key: string]: any; }>((resolve, reject) => {
            var auth = this.storageData.local.get('auth', false);
            if (auth) {
                this.http.get({ path: 'api/Authorize/access' }).subscribe(t => {
                    resolve(t);
                })
            }

        })
        return promise;
    }
}
