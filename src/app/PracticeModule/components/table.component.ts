import { Component } from "@angular/core";
import { TestService } from "../servies/test.service";
import { filter, map, Observable, Subject, take, takeUntil } from "rxjs";

@Component({
    selector: 'table-component',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent {
 title:string = "This is table component";
 value:any;
 prok = new Subject<any>();

 constructor(public tes: TestService){

 }

 ngOnInit():void {
    this.tes.data = 'I am Radha Krishna';

    this.tes.storeObservable.subscribe({
        next: (respo:any) => {
            console.log(respo);
        }
    });

    const subj = new Subject();

    subj.subscribe({
        next: (res:any) => { 
            console.log(`From subject 1 :: ${res}`)
        }
    });

    subj.subscribe({
        next: (res:any) => { 
            console.log(`From subject 2 :: ${res}`)
        }
    });


    subj.next('This is for testing subject')


    const ary = 4;
    const obs = new Observable((observer)=>{
        setInterval(()=>{
            observer.next(Math.round(Math.random() * 10));
            // observer.complete()
        })
       
        // observer.complete();
    });

    obs
    .pipe(
        filter((res:any) => res%2 == 0),
        filter((res:any) => res > 5),
        map((res:any) => res * 2),
        takeUntil(this.prok)
    )
    .subscribe({
        next: (response:any) => {
            console.log(response);
        }
    })


    setTimeout(()=>{
        this.prok.next('');
        this.prok.complete();
    },2000);


 }
 

 ngDestroy():void{

 }

}