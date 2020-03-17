import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractComplaint } from '../domain/abstract-complaint';
import { Complaint, vComplaintRecord } from "@app/models";
import { Subscription } from 'rxjs';
import { AppGrid } from 'src/app/domain/app-grid';
import { access } from '@rxweb/angular-router';
@access({ accessLevel: 1, action: "add" })
@Component({
    selector: "app-complaint-list",
    templateUrl: './complaint-list.component.html',
    styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent extends AbstractComplaint implements OnInit, OnDestroy {
    complaints: List<vComplaintRecord>;
    subscription: Subscription;
    items: List<string> = new List<string>(['John', 'hello']);
    summaryGrid: AppGrid;


    ngOnInit(): void {
        console.log(this.items.firstOrDefault(t => t == 'hello'))
        this.complaints = new List<vComplaintRecord>();
        this.subscription = this.get().subscribe((t: any) => {
            console.log(t);
            var x = new List<vComplaintRecord>(t, vComplaintRecord);
            x.removeAt(1);
            // this.summaryGrid = new AppGrid(JSON.parse(t), vComplaintRecord)
            this.complaints = t;
        })
    }

    statusresolve(id: number) {
        // console.log(id);
        // console.log(this.complaints.first(t => t.complaintId == id));
        this.patch({ params: [id], body: { ComplaintStatus: 1 } }).subscribe(t => {

        })

    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
