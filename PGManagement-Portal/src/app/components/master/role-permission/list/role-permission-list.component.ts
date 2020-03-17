import { Component, OnInit, OnDestroy } from "@angular/core";
import { List } from "@rxweb/generics";
import { AbstractRolePermission } from "../domain/abstract-role-permission";
import { RolePermission, vRolePermission, Role } from "@app/models";
import { Subscription } from "rxjs";
import { RxHttp } from "@rxweb/http";
import { Router } from '@angular/router';

@Component({
  selector: "app-role-permission-list",
  templateUrl: "./role-permission-list.component.html"
})
export class RolePermissionListComponent extends AbstractRolePermission
  implements OnInit, OnDestroy {
  rolePermission: List<vRolePermission>;
  subscription: Subscription;
  roles: List<Role>;
  roleId: any;
  constructor(private http: RxHttp, private router: Router) {
    super();
  }
  ngOnInit(): void {
    this.subscription = this.get({ path: "api/RoleLookup/RoleLookups" }).subscribe((t: List<Role>) => {
      console.log(t);
      this.roles = t;
    })

  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
  showPermission(select: any) {
    console.log(select.srcElement.value);
    this.subscription = this.get({ queryParams: { RoleId: select.srcElement.value } }).subscribe(
      (t: List<vRolePermission>) => {
        console.log(t);
        this.rolePermission = t;
      }
    );
  }
  editRole() {
    this.router.navigate([this.roleId]);
  }
}
