import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

 sideMenusList:any;
 constructor(private router: Router, private http: HttpClient){}
 
 ngOnInit():void {
  this.loadSideMenu();
 }

 public loadSideMenu = async () => {
  const url = `json/side-menus.json`;
  const mlist = await firstValueFrom(this.http.get(url)).then((res:any) => {
    res.forEach((x:any, ix:any) => { x.id = ix + 1 });
    return res;
  });
  this.sideMenusList = mlist;
 }

 public getLink = (side?:any) => {
  this.sideMenusList.forEach((x?:any) => {
    x.active = x.id == side.id;
  });
  this.close.emit();
  this.router.navigate([side.path])
 }

}
