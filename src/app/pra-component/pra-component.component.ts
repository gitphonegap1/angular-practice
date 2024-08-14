import { Component } from '@angular/core';
import { DataTrans } from '../services/data';
import { MultiplyPipe } from "../pipes/multiply";
import { BgcolorDirective } from '../directives/bgcolor';

@Component({
  selector: 'app-pra-component',
  standalone: true,
  imports: [MultiplyPipe, BgcolorDirective],
  templateUrl: './pra-component.component.html',
  styleUrl: './pra-component.component.sass'
})
export class PraComponentComponent {

constructor(private dts: DataTrans){}

ngOnInit():void{
  // this.dts.data = "This is for testing purpose";

  // this.dts.storeObservable.subscribe({
  //   next:(response?:any) => {
  //     console.log(response);
  //   }
  // })



}



}
