import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eGPcurrency',
  standalone: true
})
export class EGPcurrencyPipe implements PipeTransform {

  transform(value: number ,Currency:string="EGP"):string {
    return value + " " + Currency;
  }

}
