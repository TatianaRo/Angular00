import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataPipe'
})
export class DataPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('pipe', value);
    var data,ano,mes,dia;
    
    data = (value.substring(0, 10)).split('-');

    ano = data[0];
    mes = data[1];
    dia = data[2];

    return  dia+'/'+mes+'/'+ano;
    }

}
