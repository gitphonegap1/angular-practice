import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { mergeMap, map } from "rxjs";

@Component({
    selector: 'test-component',
    templateUrl:'./test-component.html',
    styleUrl: './test-component.sass',
    standalone: true
})

export class TestComponent{
 constructor(private http: HttpClient){}
 ngOnInit():void{
    this.getJsons().subscribe({
        next:(response?:any)=>{
            console.log(response);
        }
    })
 }

 private getJsons = () => {
    const url = '/json/n1.json';
    const request = this.http.get(url).pipe(
        mergeMap((resp:any) => this.http.get(`/json/${resp.path}`)),
        mergeMap((resp:any) => this.http.get(`/json/${resp.path}`)),
        map((resp?:any) => resp.filter((x?:any)=> x.age > 4) )
    )
    return request;
 }

}