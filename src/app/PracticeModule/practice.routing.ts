import { Routes, RouterModule, Router } from "@angular/router";
import { PracticeComponent } from "./practice.component";
import { TableComponent } from "./components/table.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: TableComponent, 
        // children:[
        //     {
        //         path: 'table', component: TableComponent
        //     }
        // ]
    },
    
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PracticeRoutes {

}