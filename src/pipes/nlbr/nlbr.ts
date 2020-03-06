import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NlbrPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'nlbr',
})
export class NlbrPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if (!value) return value;

    return value.replace(/\n/ig, '<br>');
  }
}
