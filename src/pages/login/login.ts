import { Component } from '@angular/core';
import { IonicPage, LoadingController,NavController, NavParams, ModalController,ToastController ,Events,Platform  } from 'ionic-angular';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { UserProvider,SessionProvider } from '../../providers/providers';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private loginForm : FormGroup;  
  device_token:string;
  constructor(private push: Push,private platform:Platform, private event : Events,private toastCtrl: ToastController,private loadingCtrl:LoadingController,private user_session:SessionProvider,private users:UserProvider,private login: FormBuilder,public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
    this.loginForm = this.login.group({
      email: new FormControl('',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') ]),
      password: new FormControl('',[ Validators.required ]),
      device_token: new FormControl('no token',[ Validators.required ]),
      
    });
    if (this.platform.is('cordova')) {
     this.init_push();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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

  verify()
  {
    this.navCtrl.push('VerifyPage')
  }

 

  submitLogin(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.users.login(this.loginForm,this.device_token).then((data:any) => {
      console.log(data);
      this.user_session.set_session('user_info',data);
      this.event.publish('is_login',true);
      this.event.publish('information',JSON.stringify(data));
      this.navCtrl.push('HomePage');
      this.toast_message('Login successfully');
      loading.dismiss();
    }).catch((error:any) => {
      this.toast_message(error);
      loading.dismiss();
    });
    
  }

  signup()
  {
    this.navCtrl.push('SignupPage')
  }


  forgot(){
    let modal = this.modalCtrl.create('ForgotPage');
    modal.present();
  }

  toast_message(message:string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'buttom'
    });
    toast.present()
  }

  skip(){
    this.navCtrl.push('HomePage');
  }

}
