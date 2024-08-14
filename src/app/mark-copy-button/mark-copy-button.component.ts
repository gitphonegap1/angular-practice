import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as faSolidSvg from '@fortawesome/free-solid-svg-icons';
import * as faRegularSvg from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-mark-copy-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './mark-copy-button.component.html',
  styleUrl: './mark-copy-button.component.sass'
})
export class MarkCopyButtonComponent {
  faicons:any = {
    copy: faRegularSvg.faCopy
  }

  onClick = () => {
    
  }
}
