import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {
 sideMenusList:any = [
  {id: 1, name: 'NgModule', path: 'essentials/ngmodule'},
  {id: 2, name: 'Direcrtive', path: 'essentials/directive'},
  {id: 3, name: 'Component', path: 'essentials/component'},
  {id: 4, name: 'Dependency Injection', path: 'essentials/dependencyinjection'},
  {id: 5, name: 'Pipes', path: 'essentials/pipes'},
  {id: 6, name: 'Custom Pipes', path: 'essentials/custompipes'}
 ]
 constructor(private router: Router){}
 
 public getLink = (side?:any) => {
  this.sideMenusList.forEach((x?:any) => {
    x.active = x.id == side.id;
  });
  this.router.navigate([side.path])
 }

}
