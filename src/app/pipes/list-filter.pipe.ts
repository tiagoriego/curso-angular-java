import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter',
})
export class ListFilterPipe implements PipeTransform {
  /**
   * Filtra itens em uma lista
   * @param items Item da lista
   * @param searchText Valor de Busca
   * @returns 
   * @exemplo
   * 
   */
  transform(items: any[], searchText: string | null): any[] {
    const finded: any[] = [];
    if (typeof items === 'object' && searchText) {
      for (const item of items) {
        for (const field of Object.getOwnPropertyNames(item)) {
          if (item[field]) {
            if (
              String(item[field])
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            ) {
              finded.push(item)
              break;
            }
          }
        }
      }
    }
    return searchText ? finded : items;
  }
}
