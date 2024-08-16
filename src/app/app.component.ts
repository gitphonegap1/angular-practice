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
import { filter, map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient){}
  ngOnInit(){
    //const obs = Observable.create(this.AsyncStream);
    //const obs2 = obs.pipe(map((res:any) => Math.round(res)));
    //const obs3 = obs2.pipe(filter((res:any) => res > 4));
  
    // obs3.subscribe((res:any)=> this.Listener(res));
    this.callJson()
  }

  public callJson = () => {
    const url = `json/details.json`;
    const service = this.http.get(url).pipe(
      map(result => result)
    );
    service.subscribe(response => console.log(response))

    const observable = new Observable((observer?:any) => {
      observer.next(Math.random() * 5);
      observer.complete();
    }).pipe(
      map((res:any) => res)
    );
    observable.subscribe({
      next: (resp:any)=>{
        console.log(`Response from Observable :: ${resp}`);
      }
    })

    // subject

    const subject = new Subject<any>();

    subject.subscribe({
      next: (response:any) => { console.log(response) }
    });

    subject.subscribe({
      next: (response:any) => { console.log(response) }
    })

    subject.next(`Message from subject :: ${Math.random()*6}`)

    // Promise

    const promise = new Promise((resolved:any, rejected:any)=>{
      const url2 = `json/n1.json`;
      this.http.get(url2).subscribe({
        next: (response) => resolved(response),
        error: (error) => rejected(error)
      })
    })

    promise.then((res)=> console.log(`Response from promise`, res), (error:any)=> console.log(error))


  }

  public openMenu = () => {
    this.miniMenu = true;
  }
  public closeMenu = () => {
    this.miniMenu = false;
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
