import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PraComponentComponent } from "./pra-component/pra-component.component";
import { TestComponent } from './test-component/test-component';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { MarkdownModule } from 'ngx-markdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PraComponentComponent, TestComponent, SideMenuComponent, MarkdownModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-practice';
 
}
