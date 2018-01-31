import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NpagefoundComponent } from './shared/nopagefound/npagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register/register.component';


const appRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children:[
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent},
            { path: 'graficas1', component: Graficas1Component},
            { path: '', redirectTo:'/dashboard', pathMatch:'full'},
        ]
    },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component:NpagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash:true});
