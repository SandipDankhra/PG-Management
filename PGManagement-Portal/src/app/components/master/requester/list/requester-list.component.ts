import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractRequester } from '../domain/abstract-requester';
import { vRequest } from "@app/models";
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: "app-requester-list",
    templateUrl: './requester-list.component.html'
})
export class RequesterListComponent extends AbstractRequester implements OnInit, OnDestroy {
    requesters: List<vRequest>;
    subscription: Subscription;
    result: any;
    requestId: number;
    bedId: number;
    userId: number;
    isShow: boolean = false;
    constructor(private router: Router, private toastr: ToastrService) {
        super();
    }
    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vRequest>) => {
            this.requesters = t;
            console.log(this.requesters);
            if (t.length == 0) {
                this.isShow = true;
            }
        })
    }

    getId(requestId: number, bedId: number, userId: number) {
        this.requestId = requestId;
        this.bedId = bedId;
        this.userId = userId

    }
    confirmRequest() {
        this.patch({ path: 'api/Bed', params: [this.bedId], body: { BedId: this.bedId } }).subscribe(t => {
            console.log(this.bedId);
            this.result = t;
            console.log(t);
            this.showSuccess();
            location.reload();
        })
        // this.router.navigate(['create-book-bed/add/'+this.userId+'/'+this.bedId]);
        this.router.navigateByUrl('create-book-bed/add/'+this.userId+'/'+this.bedId);
      
    }

    onDelete(requestId: number, bedId: number) {
        this.requestId = requestId;
        this.bedId = bedId;

        this.delete({ path: 'api/Requester', params: [this.requestId], body: {} }).subscribe(res => {
            this.showSuccessDelete();
            this.result = res;
            location.reload();
        })
        this.patch({ path: 'api/Bed', params: [this.bedId], body: { BedId: this.bedId, BedStatus: 1 } }).subscribe(t => {
            this.result = t;

        })
    }


    showSuccess() {
        this.toastr.success(' Request confirm Successfully !!!!');
    }

    showSuccessDelete() {
        this.toastr.info('Request Deleted Successfully !!!');
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
