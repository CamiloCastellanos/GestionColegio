import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad'
})
export class EdadPipe implements PipeTransform {

  transform(fecha: Date): any {
    let fechaActual = new Date();
    if (fechaActual.getDate() > fecha.getDate() && fechaActual.getMonth() > fecha.getMonth()) {
      return fechaActual.getFullYear() - fecha.getFullYear();
    }
    return ((fechaActual.getFullYear() - fecha.getFullYear()) - 1) > 0
      ? (fechaActual.getFullYear() - fecha.getFullYear() -1 )
      : (((fechaActual.getFullYear() - fecha.getFullYear())));

  }

}
