import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractComplaint } from '../domain/abstract-complaint';
import { Complaint, vComplaintRecord } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector: "app-complaint-list",
    templateUrl: './complaint-list.component.html',
    styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent extends AbstractComplaint implements OnInit, OnDestroy {
    complaints: List<vComplaintRecord>;
    subscription: Subscription;
    items: List<string> = new List<string>(['John', 'hello']);

    ngOnInit(): void {
        console.log(this.items.firstOrDefault(t => t == 'hello'))
        this.complaints = new List<vComplaintRecord>();
        this.subscription = this.get().subscribe((t: List<vComplaintRecord>) => {
            console.log(t);
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
