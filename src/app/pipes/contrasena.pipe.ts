import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, parms:boolean): any {

   return parms ? value : value.split('').map(x=>'*').join('');
  }

}
