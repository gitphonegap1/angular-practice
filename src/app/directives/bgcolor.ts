import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[bgcolor]'
})
export class BgcolorDirective {
  constructor(private elf: ElementRef, private renderer: Renderer2) {
    console.log(this.elf);
    // Instead of directly accessing nativeElement, use Renderer2 for better abstraction and safety
    this.renderer.setStyle(this.elf.nativeElement, 'color', 'purple');
  }

}