import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController,ToastController,Events,Platform } from 'ionic-angular';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { UserProvider,SessionProvider } from '../../providers/providers';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {
  private verifiyForm : FormGroup;  
  auth_key:string;
  disable:boolean=false;
  user_info:any;
  otp:string;
  device_token:string;
  constructor(private push: Push,private platform: Platform,private event : Events,private toastCtrl: ToastController,private loadingCtrl:LoadingController,private user_session:SessionProvider,private users:UserProvider,private verifiy: FormBuilder,public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
    this.verifiyForm = this.verifiy.group({
      otp: new FormControl('',[ Validators.required ])
    });
    if(this.user_session.get_session('user_info')){
      this.user_info=this.user_session.get_session('user_info');
      this.auth_key=this.user_info.auth_key;
    }else{
      this.navCtrl.push('LoginPage');
    }
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPage');
  }


  back(){
    //this.navCtrl.pop();
  }

  init_push(){
    const options: PushOptions = {
      android: {},
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
   };
   const pushObject: PushObject = this.push.init(options);
   pushObject.on('registration').subscribe((registration: any) => this.device_token=registration.registrationId);
   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
  }

  success(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.users.verifiy_otp(this.verifiyForm,this.auth_key,this.device_token).then((data:any) => {
      this.user_session.set_session('user_info',data);
      this.event.publish('is_login',true);
      this.event.publish('information',JSON.stringify(data));
      this.navCtrl.push('VerifiedPage');
      this.toast_message('Otp Verified Successfully');
      loading.dismiss();
    }).catch((error:any) => {
      this.toast_message(error);
      loading.dismiss();
    });
  }

  resend():void{
    this.disable=true;
    this.users.resend(this.auth_key).then((data:any) => {
      this.toast_message('Otp send');
      this.disable=false;
    }).catch((error:any) => {
      this.toast_message(error);
    });
  }

  toast_message(message:string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'buttom'
    });
    toast.present()
  }



}
