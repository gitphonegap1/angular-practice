import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
    selector: '[highlightor]'
})

export class HighlightorDirective {
    
    @Input() value:any;
    @Output() trans: EventEmitter<any> = new EventEmitter<any>();

    @HostListener('click', ['$event'])
    onClick = (event: Event) => {
        console.log(`Click called through host listener`);
    }

    @HostListener('mouseover',['$event'])
    onMouseover = (event: MouseEvent) => {
        console.log(`Hover called through host listener`);
    }

    constructor(private elm: ElementRef){
        this.elm.nativeElement.style.color = 'purple';
        this.elm.nativeElement.style.cursor = 'pointer';
        // this.elm.nativeElement.onclick = () => {
        //     this.elm.nativeElement.style.color = 'blue';
        //     this.trans.emit();
        // }
        // this.elm.nativeElement.onmouseover = () => {
        //     this.elm.nativeElement.style.color = 'red';
        // }
        // this.elm.nativeElement.onmouseleave = () => {
        //     this.elm.nativeElement.style.color = 'green';
        // }
    }

    ngOnChanges():void {
        
        let color = 'red';

        switch(this.value){
            case 2:
            case 5:
                color = 'green';
                break;
            
            default:
                color = 'yellow';
                break;
        }

        this.elm.nativeElement.style.color = color;

    }
}