import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

 sideMenusList:any = [
  {id: 1, name: 'NgModule', path: 'essentials/ngmodule'},
  {id: 2, name: 'Direcrtive', path: 'essentials/directive'},
  {id: 3, name: 'Component', path: 'essentials/component'},
  {id: 4, name: 'Component Life Cycle', path: 'essentials/componentlifecycle'},
  {id: 5, name: 'Dependency Injection', path: 'essentials/dependencyinjection'},
  {id: 6, name: 'Pipes', path: 'essentials/pipes'},
  {id: 7, name: 'Custom Pipes', path: 'essentials/custompipes'},
  {id: 8, name: 'Services', path: 'essentials/services'},
  {id: 9, name: 'Interceptors', path: 'essentials/interceptor'},
  {id: 10, name: 'RxJs', path: 'essentials/rxjs'}
 ]
 constructor(private router: Router){}
 
 public getLink = (side?:any) => {
  this.sideMenusList.forEach((x?:any) => {
    x.active = x.id == side.id;
  });
  this.close.emit();
  this.router.navigate([side.path])
 }

}
