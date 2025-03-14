import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { UserComponent } from './components/user/user.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PostApiComponent } from './components/post-api/post-api.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { NgTempContainerComponent } from './components/ng-temp-container/ng-temp-container.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'admin',
                component: AdminComponent
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'dataBinding',
                component: DataBindingComponent
            },
            {
                path: 'ngIf',
                component: NgIfComponent
            },
            {
                path: 'ngFor',
                component: NgForComponent
            },
            {
                path: 'ngClass',
                component: NgClassComponent
            },
            {
                path: 'controlFlow',
                component: ControlFlowComponent
            },
            {
                path: 'templateForm',
                component: TemplateFormComponent
            },
            {
                path: 'reactiveForm',
                component: ReactiveFormComponent
            },
            {
                path: 'getApi',
                component: GetApiComponent
            },
            {
                path: 'postApi',
                component: PostApiComponent
            },
            {
                path: 'resourceApi',
                component: ResourceApiComponent
            },
            {
                path: 'customer',
                component: CustomerComponent
            },
            {
                path: 'lifeCycle',
                component: LifeCycleComponent
            },
            {
                path: 'ngTempContainer',
                component: NgTempContainerComponent
            },
        ]
    },
];
