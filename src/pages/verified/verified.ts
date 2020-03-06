import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,Events } from 'ionic-angular';
import { SessionProvider } from '../../providers/providers';
@IonicPage()
@Component({
  selector: 'page-verified',
  templateUrl: 'verified.html',
})
export class VerifiedPage {
  user_info:any=[];
  constructor(private user_session:SessionProvider, public navCtrl: NavController,private event:Events, public navParams: NavParams,public viewCtrl:ViewController) {
   if(this.user_session.get_session('user_info')){
      this.user_info=this.user_session.get_session('user_info');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifiedPage');
  }

  home(){
    this.event.publish('is_login',true);
    //this.event.publish('information',this.user_info);
    this.navCtrl.setRoot('HomePage');
  }

}
