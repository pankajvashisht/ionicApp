import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App ,ModalController,AlertController,Events } from 'ionic-angular';
import { SessionProvider } from '../../providers/providers';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  is_login:boolean=false;
  user_info:any=[];
  rootPage:any ;
  constructor(private event :Events,private alertctrl:AlertController, private session:SessionProvider,private modalCtrl:ModalController, public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public app: App) {
    if(this.session.get_session('user_info')){
      this.is_login=true;
      this.user_info=this.session.get_session('user_info');
      console.log(this.user_info);
    }else{
      this.navCtrl.push('HomePage');
    }
    this.event.subscribe('information', (data:any) => {
      this.user_info=JSON.parse(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
   
    for(let i =0;i<=100 ;i++){
      if(2%i==0){
          console.log(i);
      }
     // a++;
    } 
  }
 

  editprofile(){
    let modal = this.modalCtrl.create('EditprofilePage');
    modal.present();
  }

  logout(){
    let confirm = this.alertctrl.create({
      title: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Yes, Log Out',
          handler: () => {
          localStorage.clear();
          this.session.delete_session();
          this.rootPage ='LoginPage';
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  changepass(){
    this.navCtrl.push('ChangepasswordPage')
  }
}
