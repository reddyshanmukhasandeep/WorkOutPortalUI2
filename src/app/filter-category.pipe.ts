import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(items: any[], term): any {
  
        
        return term
        ? items.filter(item => (item.categoryName.indexOf(term) )!== -1)
        : items;
      }

}
