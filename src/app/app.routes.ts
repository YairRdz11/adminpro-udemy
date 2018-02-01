import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { NpagefoundComponent } from './shared/nopagefound/npagefound.component';



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component:NpagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash:true});
