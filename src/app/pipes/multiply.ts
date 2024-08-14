import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'multiply',
    standalone: true
})

export class MultiplyPipe implements PipeTransform {
    transform(value: any, arg: any) {
        return value ? value * arg : 0
    }
}