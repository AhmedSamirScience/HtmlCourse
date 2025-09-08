import { Routes } from '@angular/router';
import { AboutUs } from '../components/about-us/about-us';
import { App } from './app';
 
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('../app/app').then(m => m.App) },
    { path: 'about', loadComponent: () => import('../components/about-us/about-us').then(m => m.AboutUs) },
];

 