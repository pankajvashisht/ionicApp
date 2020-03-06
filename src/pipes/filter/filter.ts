import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(items: any, searchText: any): any
   {
     if(searchText == null) return items;

     return items.filter(function(items){
       return items.is_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1  ;
     })
   }
}



