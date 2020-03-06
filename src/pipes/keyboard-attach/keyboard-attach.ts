import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the KeyboardAttachPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'keyboardAttach',
})
export class KeyboardAttachPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
