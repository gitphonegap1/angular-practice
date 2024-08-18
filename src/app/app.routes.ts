import { Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    // {path: '', loadChildren: () => import(`../app/PracticeModule/practice.module`).then(x => x.PracticeModule)}
    {path:'', pathMatch: 'full', component: HomeComponent },
    {path: 'essentials/:path', component: PageContentComponent }
];
