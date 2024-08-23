import { Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { HomeComponent } from './home/home.component';
import { TechnologyStackComponent } from './technology-stack/technology-stack.component';

export const routes: Routes = [
    // {path: '', loadChildren: () => import(`../app/PracticeModule/practice.module`).then(x => x.PracticeModule)}
    {path:'', pathMatch: 'full', component: HomeComponent },
    {path: 'essentials/:path/:file', component: PageContentComponent }
    // { path: '', component: TechnologyStackComponent }
];
