import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from './_guard/auth.guard';


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path:'',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
       {path: 'admin', component: HomeComponent},
        {path: 'login', component: LoginComponent},
       {path: 'profile', component: ProfileComponent},
        
        
      ]
 },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
