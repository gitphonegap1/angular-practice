import { NgModule } from "@angular/core";
import { TableComponent } from "./components/table.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { PracticeComponent } from "./practice.component";
import { PracticeRoutes } from "./practice.routing";
import { HighlightorDirective } from "./directives/highlighter";
import { FormsModule } from '@angular/forms';
import { TestService } from "./servies/test.service";

@NgModule({
    declarations:[TableComponent, PracticeComponent, HighlightorDirective],
    imports:[CommonModule, RouterOutlet, PracticeRoutes, FormsModule],
    providers:[TestService]
})

export class PracticeModule {

}