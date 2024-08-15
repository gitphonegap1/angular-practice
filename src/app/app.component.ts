import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PraComponentComponent } from "./pra-component/pra-component.component";
import { TestComponent } from './test-component/test-component';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { MarkdownModule } from 'ngx-markdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from "./header/header.component";
import * as faRegularSvg from '@fortawesome/free-regular-svg-icons';
import * as faSolidSvg from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { filter, map, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PraComponentComponent, TestComponent, SideMenuComponent, MarkdownModule, FontAwesomeModule, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-practice';
  miniMenu:any;
  faicons = {
    menu: faSolidSvg.faBars,
    close: faSolidSvg.faXmark
  }

  public openMenu = () => {
    this.miniMenu = true;
  }
  public closeMenu = () => {
    this.miniMenu = false;
  }


  ngOnInit(){
  //const obs = Observable.create(this.AsyncStream);
  //const obs2 = obs.pipe(map((res:any) => Math.round(res)));
  //const obs3 = obs2.pipe(filter((res:any) => res > 4));

  // obs3.subscribe((res:any)=> this.Listener(res));
  }

  public AsyncStream = (observer:any) => {
    const tim = setInterval(()=>{
      observer.next(Math.random()*10);
    })
  }
 
  public Listener = (res?:any) => {
     console.log(res)
  }

}
