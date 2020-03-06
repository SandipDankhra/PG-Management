import { Component, OnInit, OnDestroy } from "@angular/core"
import { CoreComponent } from '@rxweb/angular-router';
import{ActivatedRoute}from '@angular/router';



@Component({
    selector: "app-client-index",
    templateUrl: './client-index.componet.html'
})
export class ClientIndexComponent  implements OnInit {

    constructor(private activateroute:ActivatedRoute){

    }
    ngOnInit(): void {

    }

}
