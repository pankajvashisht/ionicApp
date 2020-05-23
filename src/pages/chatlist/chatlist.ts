import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController } from 'ionic-angular';
import { ApisProvider,SessionProvider } from '../../providers/providers';
import { AppCon } from '../../app/app.global';
/**
 * Generated class for the ChatlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatlist',
  templateUrl: 'chatlist.html',
})
export class ChatlistPage {
  public all_message:any =[];
  user_info:any=[];
  is_show:boolean=true;
  app_statics:any=AppCon;
  is_login:boolean=false;
  total_record:number;
  page:number=1;
  
  constructor(private loadingCtrl:LoadingController, private alterctrl:AlertController,private toastCtrl:ToastController, private api : ApisProvider, private session:SessionProvider, public navCtrl: NavController, public navParams: NavParams) {
    if(this.session.get_session('user_info')){
      this.is_login=true;
      this.user_info=this.session.get_session('user_info');
    }else{
      this.navCtrl.push('HomePage');
    }
    this.get_message();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatlistPage');
  }
  get_message(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.api.last_chat(this.user_info.auth_key,1).then((data:any) => {
      loading.dismiss();
      this.all_message=data;
      this.total_record=data.length;
      console.log(this.all_message);
      this.is_show=false;
    }).catch((err)=> {
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'buttom'
       });
      toast.present();
    });
  }

  saerch_name(name:string){
    this.api.last_chat(this.user_info.auth_key,1,name).then((data:any) => {
      this.all_message=data;
      this.total_record=data.length;
      console.log(this.all_message);
      this.is_show=false;
    }).catch((err)=> {
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'buttom'
       });
      toast.present();
    });
  }
  
  chat(product_id:string,user_id:string,message:any,product_name:string){
    if(this.is_login){
      this.navCtrl.push('AllchatPage',{'product_id':product_id,'user_id':user_id,'message':message,product_name:product_name});
    }else{
      let alert=this.alterctrl.create({
        title: 'Login Alert',
        subTitle: 'Please Login First',
        buttons: ['ok']
      });
      alert.present();
    } 
  }

  back(){
    this.navCtrl.push('HomePage');
  }
  pagination(infiniteScroll){
    this.page++;
    this.api.last_chat(this.user_info.auth_key,this.page).then((data:any )=> {
      this.total_record=data.length;
      for(let i=0;i<data.length;i++){
        this.all_message.push(data[i]);
      }
      infiniteScroll.complete();
    }).catch((error:any) => {
     // this.toast_message("No For Product");
      this.total_record=0;
    });
  }

}
