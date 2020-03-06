import { Component } from '@angular/core';
import { IonicPage, LoadingController,NavController, NavParams, ModalController,ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { UserProvider,SessionProvider } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  private signupForm:FormGroup;
  all_country:any=[];
  selectOptions:any;
  constructor(private toastCtrl: ToastController,private loadingCtrl:LoadingController,private user_session:SessionProvider,private users:UserProvider,private UsersignUp: FormBuilder,public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
    this.signupForm = this.UsersignUp.group({
      email: new FormControl('',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') ]),
      password: new FormControl('',[ Validators.required ]),
      phone: new FormControl('',[ Validators.required ]),
      first_name: new FormControl('',[ Validators.required ]),
      last_name: new FormControl('',[ Validators.required ]),
      country_code: new FormControl('93',[ Validators.required ]),
    });
    this.get_country();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  get_country(){
    this.users.all_country().then((data:any) => {
      this.all_country=data;
    }).catch((error:any) => {
      this.toast_message(error);
    });
  }

  submitSignup(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.users.signup(this.signupForm).then((data:any) => {
      this.user_session.set_session('user_info',data);
      this.navCtrl.push('VerifyPage');
      this.toast_message('Signup successfully');
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
  }

}
