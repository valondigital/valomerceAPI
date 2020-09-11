import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

//import {AuthGuard} from './_guards/auth.guard';
;


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
  {
      path:'',
      runGuardsAndResolvers: 'always',
      //canActivate: [AuthGuard],
      children: [
        {path: 'admin', component: HomeComponent},
        
        
      ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
