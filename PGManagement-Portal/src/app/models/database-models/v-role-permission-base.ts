import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vRolePermissionBase {

//#region roleId Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'roleId', keyColumn: false})
        roleId : number;
//#endregion roleId Prop


//#region applicationModuleId Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'applicationModuleId', keyColumn: false})
        applicationModuleId : number;
//#endregion applicationModuleId Prop


//#region canView Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'canView', keyColumn: false})
        canView : any;
//#endregion canView Prop


//#region canAdd Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'canAdd', keyColumn: false})
        canAdd : any;
//#endregion canAdd Prop


//#region canEdit Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'canEdit', keyColumn: false})
        canEdit : any;
//#endregion canEdit Prop


//#region canDelete Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'canDelete', keyColumn: false})
        canDelete : any;
//#endregion canDelete Prop


//#region permissionPriority Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'permissionPriority', keyColumn: true})
        permissionPriority : number;
//#endregion permissionPriority Prop


//#region applicationModuleName Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'applicationModuleName', keyColumn: false})
        applicationModuleName : string;
//#endregion applicationModuleName Prop


//#region rolePermissionId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'rolePermissionId', keyColumn: true})
        rolePermissionId : number;
//#endregion rolePermissionId Prop

}