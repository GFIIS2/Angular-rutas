import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shortText'
})
export class ShortTextPipe implements PipeTransform{
    transform(text: string, len: number): string {
        //Producto de ....., 10
        return text.length > len ? text.substring(0,len) + '...' : text;
    }
}