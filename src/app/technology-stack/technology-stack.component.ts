import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technology-stack',
  standalone: true,
  imports: [],
  templateUrl: './technology-stack.component.html',
  styleUrl: './technology-stack.component.sass'
})
export class TechnologyStackComponent {
constructor(private http: HttpClient){}
}
