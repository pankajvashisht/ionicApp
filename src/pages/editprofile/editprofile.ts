import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController,LoadingController,Events } from 'ionic-angular';
import { SessionProvider,UserProvider } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  is_login:boolean=false;
  user_info:any=[];
  selectedFile: File;
  constructor(private event: Events, private loadingCtrl:LoadingController, private toast:ToastController, private session:SessionProvider,private user:UserProvider, public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    if(this.session.get_session('user_info')){
      this.is_login=true;
      this.user_info=this.session.get_session('user_info');
      console.log(this.user_info);
    }else{
      this.navCtrl.push('HomePage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  save(){
    if(this.selectedFile){
      this.user_info.photo=this.selectedFile;
    }
    let loading = this.loadingCtrl.create({
      content: 'Porfile Updated...'
    });
    loading.present();
    this.user.update_profile(this.user_info).then((data:any) => {
      this.toast_message("Profile Update Successfully");
      this.viewCtrl.dismiss();  
      this.session.set_session('user_info',data);
      this.event.publish('is_login',true);
      this.event.publish('information',JSON.stringify(data));
      loading.dismiss();
    }).catch((err:any) => {
      this.toast_message(err);
      loading.dismiss();
    });
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
  onSelectFile(event) { // called each time file input changes
    this.selectedFile = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.user_info.image = event.target.result;
      }
    }
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
