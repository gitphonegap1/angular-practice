import { Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';

export const routes: Routes = [
    {path: 'essentials/:path', component: PageContentComponent }
];
