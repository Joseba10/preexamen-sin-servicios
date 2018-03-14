import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'nombrefilter'
})
export class nombrefilter implements PipeTransform {

    /**
   * Filtro para buscar en una coleccion de Coches. No es CaseSensitive.
   * @param stock : Servicios[]
   * @param searchText : string con la marca o modelo del coche
   */
    transform(value: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }
}  