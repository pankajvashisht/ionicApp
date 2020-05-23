import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController,ToastController } from 'ionic-angular';
import { SessionProvider,UserProvider } from '../../providers/providers';
/**
 * Generated class for the SendqueryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendquery',
  templateUrl: 'sendquery.html',
})
export class SendqueryPage {
  public query:string;
  is_login:boolean=false;
  user_info:any=[];
  product_info:any=[{
    message:'',
    auth_key:'',
    vender_id:'',
    table_id:0,
    table_type:1
  }];
  constructor(private loadingCtrl:LoadingController,private session:SessionProvider,private toast:ToastController,private user:UserProvider,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    if(this.session.get_session('user_info')){
      this.is_login=true;
      this.user_info=this.session.get_session('user_info');
      this.product_info['auth_key']=this.user_info.auth_key;
      console.log(this.user_info);
    }else{
      this.viewCtrl.dismiss();
    }
    if(!this.navParams.get('vender_id')){
      this.viewCtrl.dismiss();
    }else{
      this.product_info['vender_id']=this.navParams.get('vender_id');
      this.product_info['table_type']=this.navParams.get('type');
      this.product_info['table_id']=this.navParams.get('table_id');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendqueryPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  change_password(){
    if(this.query==''){
      this.toast_message("Please Enter Your Query");
      return false;
    }
    this.product_info['message']=this.query;
    let loading = this.loadingCtrl.create({
      content: 'Sending Query'
    });
    loading.present();
    this.user.send_query(this.product_info).then((data:any) => {
      this.toast_message("Query send Successfully");
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
