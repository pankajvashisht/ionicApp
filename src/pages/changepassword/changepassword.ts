import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController,LoadingController} from 'ionic-angular';
import { SessionProvider,UserProvider } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  old_password:string='';
  new_password:string='';
  confirm_password:string='';
  is_login:boolean=false;
  user_info:any=[];
  constructor(private loadingCtrl:LoadingController,private session:SessionProvider,private toast:ToastController,private user:UserProvider,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    if(this.session.get_session('user_info')){
      this.is_login=true;
      this.user_info=this.session.get_session('user_info');
      console.log(this.user_info);
    }else{
      this.navCtrl.push('HomePage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  change_password(){
    if(this.old_password==''){
      this.toast_message("Old Password field is required");
      return false;
    }
    if(this.new_password=='' || this.new_password!=this.confirm_password){
      this.toast_message("New Password Not Match with Confirm Password");
      return false;
    }
    let loading = this.loadingCtrl.create({
      content: 'Changing Password..'
    });
    loading.present();
    this.user.changepassword(this.old_password,this.new_password,this.user_info.auth_key).then((data:any) => {
      this.toast_message("Password Change Successfully");
      this.viewCtrl.dismiss();  
      loading.dismiss();
    }).catch((err:any) => {
      this.toast_message(err);
      loading.dismiss();
    });
  }

  toast_message(message:string):void{
    let toast = this.toast.create({
      message: message,
      duration: 3000,
      position: 'buttom'
    });
    toast.present()
  }

}
