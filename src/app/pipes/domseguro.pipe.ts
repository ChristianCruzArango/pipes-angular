import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

/*cargar videos de youtube pasando el id del video como parametro ya que si se manda sin esta pipe aparecera
un error de seguridad */
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanatizer:DomSanitizer){}

  transform(value: string, url:string): any {
    return this.domSanatizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
