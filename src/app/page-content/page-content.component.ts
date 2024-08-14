import { Component } from '@angular/core';
import { ClipboardButtonComponent, MarkdownModule } from 'ngx-markdown';
import { ActivatedRoute } from '@angular/router';
import { MarkCopyButtonComponent } from '../mark-copy-button/mark-copy-button.component';
@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.sass'
})
export class PageContentComponent {
srcPath: string = 'md/directive.md';
copyComponent = MarkCopyButtonComponent;

constructor(private route: ActivatedRoute){

}

ngOnInit():void {
  this.route.paramMap.subscribe((res?:any)=>{
    // console.log(res.params.path)
    const path = res.params.path;
    this.srcPath = `md/${path}.md`
  })
}

}
