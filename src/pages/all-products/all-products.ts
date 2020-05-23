import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController,AlertController } from 'ionic-angular';
import { ApisProvider,SessionProvider } from '../../providers/providers';
import { AppCon } from '../../app/app.global';

/**
 * Generated class for the AllProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-products',
  templateUrl: 'all-products.html',
})
export class AllProductsPage {
  public product_by:any={
    id:0,
    type:0,
    page:1,
    is_my:0,
    auth_key:'?auth_key='
  };
  public products:any=[];
  app_statics:any=AppCon;
  total_record:number=0;
  is_login:boolean=false;
  demond:number=0;
  user_info:any=[];
  constructor(private session:SessionProvider,private alterctrl:AlertController ,public toast:ToastController, public navCtrl: NavController,private apis:ApisProvider,private loadingCtrl:LoadingController, public navParams: NavParams) {
    if(this.session.get_session('user_info')){
      this.is_login=true;
      this.user_info=this.session.get_session('user_info');
      this.product_by.auth_key="?auth_key="+this.user_info.auth_key;
    }
    if(!this.navParams.get('id')){
      this.navCtrl.push('HomePage');
    }else{
      this.product_by.id=this.navParams.get('id');
      this.product_by.type=this.navParams.get('type');
    }
    if(this.navParams.get('demond')){
      this.demond=this.navParams.get('demond');
    }
    console.log(this.product_by);
    this.get_products(this.product_by);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllProductsPage');
  }

  get_products(filter){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    if(this.demond!=1){
      this.apis.page_product(filter).then(data => {
        this.products=data;
        this.total_record=this.products.length;
        loading.dismiss();
      }).catch((err:string) => {
        this.toast_message(err);
      });
    }else{
      this.apis.demond_product(filter).then(data => {
        this.products=data;
        this.total_record=this.products.length;
        loading.dismiss();
      }).catch((err:string) => {
        this.toast_message(err);
      });
    }
    
  }
  pagination(infiniteScroll){
    this.product_by.page++;
    this.apis.page_product(this.product_by).then((data:any )=> {
      this.total_record=data.length;
      for(let i=0;i<data.length;i++){
        this.products.push(data[i]);
      }
      infiniteScroll.complete();
    }).catch((error:any) => {
      this.toast_message("No For Product");
      this.total_record=0;
    });
  }

  details(product_details:any){
    this.navCtrl.push('ProductdetailsPage',{details:product_details});
  }

  back(){
    this.navCtrl.pop();
  }

  do_fav(object:any){
    if(object[0].is_fav==1){
      object[0].is_fav=0;
    }else{
      object[0].is_fav=1;
    }
    if(this.is_login){
      this.apis.do_fav(object.id).then((data:string) => {
          this.toast_message(data);
      });
    }else{
      let alert=this.alterctrl.create({
        title: 'Login Alert',
        subTitle: 'Please Login First',
        buttons: ['ok']
      });
      alert.present();
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