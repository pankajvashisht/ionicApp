import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController,LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/providers';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  private ForGot : FormGroup;  
  email : string;
  constructor(private toastCtrl: ToastController,private loadingCtrl:LoadingController,private users:UserProvider,private fogotpassword: FormBuilder,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.ForGot = this.fogotpassword.group({
      email: new FormControl('',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') ]),      
    });
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  submitforgot(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.users.forgot_password(this.ForGot).then((data:any) => {
      this.viewCtrl.dismiss();
      this.toast_message('Email sent successfully');
      loading.dismiss();
    }).catch((error:any) => {
      this.toast_message(error);
      loading.dismiss();
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

  login(){
    this.navCtrl.push('LoginPage');
    this.viewCtrl.dismiss();
  }

}
