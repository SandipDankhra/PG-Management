import { Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RouteProvider } from "@rxweb/angular-router"
import { Injectable } from '@angular/core';
import { ClientIndexComponent } from '../user/client-index.componet';
import { RegistrationAddComponent } from '../user/registration/add/registration-add.component';
var routings = [
	// {
	// 	path: '', redirectTo: 'login', pathMatch: 'full',
	// },
	{
		path: '', redirectTo: 'client-index', pathMatch: 'full',
	},
	{
		path: "login",
		loadChildren: () => import("../login/login.module").then(m => m.LoginModule),
	},
	{
		path: "client-index",
		component: ClientIndexComponent
	},
	{
		path: "registration",
		component: RegistrationAddComponent
	},
	{
		path: "login",
		loadChildren: () => import("../login/login.module").then(m => m.LoginModule),
	},

	{
		path: "change-password",
		loadChildren: () => import("../master/change-password/change-password.module").then(m => m.ChangePasswordModule)
	},
	{
		path: "complaints",
		loadChildren: () => import("../master/complaints/complaint.module").then(m => m.ComplaintModule)
	},
	{
		path: "documents",
		loadChildren: () => import("../master/documents/document.module").then(m => m.DocumentModule)
	},
	{
		path: "employee",
		loadChildren: () => import("../master/employee/employee.module").then(m => m.EmployeeModule)
	},
	{
		path: "expense",
		loadChildren: () => import("../master/expense/expense.module").then(m => m.ExpenseModule)
	},
	{
		path: "forget-password",
		loadChildren: () => import("../master/forget-password/forget-password.module").then(m => m.ForgetPasswordModule)
	},
	{
		path: "menu",
		loadChildren: () => import("../master/menu/menu.module").then(m => m.MenuModule)
	},
	{
		path: "notices",
		loadChildren: () => import("../master/notices/notice.module").then(m => m.NoticeModule)
	},
	{
		path: "rental",
		loadChildren: () => import("../master/rental/rental.module").then(m => m.RentalModule)
	},
	{
		path: "requester",
		loadChildren: () => import("../master/requester/requester.module").then(m => m.RequesterModule)
	},
	{
		path: "reviews",
		loadChildren: () => import("../master/reviews/review.module").then(m => m.ReviewModule)
	},
	{
		path: "role-permission",
		loadChildren: () => import("../master/role-permission/role-permission.module").then(m => m.RolePermissionModule)
	},
	{
		path: "v-available-bed",
		loadChildren: () => import("../master/v-available-bed/v-available-bed.module").then(m => m.vAvailableBedModule)
	},
	{
		path: "v-invoice-record",
		loadChildren: () => import("../master/v-invoice-record/v-invoice-record.module").then(m => m.vInvoiceRecordModule)
	},
	{
		path: "change-password",
		loadChildren: () => import("../master/change-password/change-password.module").then(m => m.ChangePasswordModule)
	},
	{
		path: "complaints",
		loadChildren: () => import("../master/complaints/complaint.module").then(m => m.ComplaintModule)
	},
	{
		path: "documents",
		loadChildren: () => import("../master/documents/document.module").then(m => m.DocumentModule)
	},
	{
		path: "employee",
		loadChildren: () => import("../master/employee/employee.module").then(m => m.EmployeeModule)
	},
	{
		path: "expense",
		loadChildren: () => import("../master/expense/expense.module").then(m => m.ExpenseModule)
	},
	{
		path: "forget-password",
		loadChildren: () => import("../master/forget-password/forget-password.module").then(m => m.ForgetPasswordModule)
	},
	{
		path: "menu",
		loadChildren: () => import("../master/menu/menu.module").then(m => m.MenuModule)
	},
	{
		path: "notices",
		loadChildren: () => import("../master/notices/notice.module").then(m => m.NoticeModule)
	},
	{
		path: "rental",
		loadChildren: () => import("../master/rental/rental.module").then(m => m.RentalModule)
	},
	{
		path: "requester",
		loadChildren: () => import("../master/requester/requester.module").then(m => m.RequesterModule)
	},
	{
		path: "reviews",
		loadChildren: () => import("../master/reviews/review.module").then(m => m.ReviewModule)
	},
	{
		path: "role-permission",
		loadChildren: () => import("../master/role-permission/role-permission.module").then(m => m.RolePermissionModule)
	},
	{
		path: "v-available-bed",
		loadChildren: () => import("../master/v-available-bed/v-available-bed.module").then(m => m.vAvailableBedModule)
	},
	{
		path: "v-invoice-record",
		loadChildren: () => import("../master/v-invoice-record/v-invoice-record.module").then(m => m.vInvoiceRecordModule)
	},

	{
		path: "bed",
		loadChildren: () => import("../master/bed/bed.module").then(m => m.BedModule)
	},
	{
		path: "create-book-bed",
		loadChildren: () => import("../master/create-book-bed/create-book-bed.module").then(m => m.CreateBookBedModule)
	},
	{
		path: "flat",
		loadChildren: () => import("../master/flat/flat.module").then(m => m.FlatModule)
	},
	{
		path: "payment",
		loadChildren: () => import("../master/payment/payment.module").then(m => m.PaymentModule)
	},
	{
		path: "room",
		loadChildren: () => import("../master/room/room.module").then(m => m.RoomModule)
	},
	{
		path: "bed",
		loadChildren: () => import("../master/bed/bed.module").then(m => m.BedModule)
	},
	{
		path: "create-book-bed",
		loadChildren: () => import("../master/create-book-bed/create-book-bed.module").then(m => m.CreateBookBedModule)
	},
	{
		path: "flat",
		loadChildren: () => import("../master/flat/flat.module").then(m => m.FlatModule)
	},
	{
		path: "payment",
		loadChildren: () => import("../master/payment/payment.module").then(m => m.PaymentModule)
	},
	{
		path: "room",
		loadChildren: () => import("../master/room/room.module").then(m => m.RoomModule)
	},
]
//generated code
//])


export const ROUTES: Routes = routings;







console.log(ROUTES)

