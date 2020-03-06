import { Directive ,Input, OnInit } from '@angular/core';

/**
 * Generated class for the ImagesDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[img-preloader]', // Attribute selector
  host: {
    '[attr.src]': 'finalImage'    
  }
})
export class ImagesDirective {
  @Input('img-preloader') targetSource: string;
  downloadingImage : any; 
  finalImage: any; 
  defaultImage : string = 'assets/imgs/loader.gif';
  ngOnInit() {
    this.finalImage = this.defaultImage;
    this.downloadingImage = new Image();  
    this.downloadingImage.onload = () => { 
      console.log('image downloaded');
      this.finalImage = this.targetSource;  
    }
    this.downloadingImage.src = this.targetSource;
  }

}
