import { Component,ViewChild } from '@angular/core';
import { IonicPage,NavController,Slides,NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  @ViewChild(Slides) slides: Slides;
  currentIndex:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentIndex=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  goToNextSlide() {
    this.slides.slideNext();
    this.slides.getActiveIndex();
  }
  goToPrevSlide() {
    this.slides.slidePrev();
    this.slides.getActiveIndex();
  }


  slideChanged() {
   this.currentIndex = this.slides.getActiveIndex();
    console.log(this.currentIndex);
  }

  login(){
    this.navCtrl.push('LoginPage');
  }

}
