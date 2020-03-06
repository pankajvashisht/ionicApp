import { Component } from '@angular/core';
import { IonicPage, LoadingController,ToastController ,NavController ,NavParams,AlertController,Events } from 'ionic-angular';
import { ApisProvider,SessionProvider } from '../../providers/providers';
import { AppCon } from '../../app/app.global';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public main_category:any=[];
  public top_vendors:any=[];
  public featured:any=[];
  public top_sale:any=[];
  public all_products:any=[];
  app_statics:any=AppCon;
  is_login:boolean=false;
  pushPage:string='AddDemondPage';
  user_info:any=[];
  auth_key:string;
  page:number=1;
  total_record:number;
  search_data:string='';
  search_page:number=1;
  constructor(private event: Events,private toast:ToastController,private apis:ApisProvider,private alterctrl:AlertController, private session:SessionProvider,private loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    if(this.session.get_session('user_info')){
      this.is_login=true;
      this.user_info=this.session.get_session('user_info');
      this.auth_key=this.user_info.auth_key;
      console.log(this.user_info);
    }
    this.event.subscribe('information', (data:any) => {
      this.user_info=data;
    });
    this.event.subscribe('is_login', (data:boolean) => {
       this.is_login=data;
    });
    this.top_category();
    this.get_vendor();
    this.get_feature_product();
    this.get_all_product();
    this.top_sales();
  }
  // get all category
  top_category(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.apis.top_ten_category().then(data => {
      this.main_category=data;
      loading.dismiss();
    }).catch((err:string) => {
      loading.dismiss();
      this.toast_message(err);
    });
  }
  // get all vendors 
  get_vendor(){
    this.apis.top_ten_vendor().then(data => {
      this.top_vendors=data;
    }).catch((err:string) => {
      this.toast_message(err);
    });;
  }
  // get the feature products
  get_feature_product(){
    this.apis.top_ten_feature().then(data => {
      this.featured=data;
    }).catch((err:string) => {
      this.toast_message(err);
    });;
  }
  // top sale product
  top_sales(){
    this.apis.top_ten_sale().then(data => {
      this.top_sale=data;
    }).catch((err:string) => {
      this.toast_message(err);
    });;
  }

  get_all_product(){
    this.apis.all_product(1,this.auth_key).then(data => {
      this.all_products=data;
      this.total_record=this.all_products.length;
    }).catch((err:string) => {
      this.toast_message(err);
    });
  }

  product(id:number,type:number){
    this.navCtrl.push('AllProductsPage',{type:type,id:id});
  }
  details(product_details:any){
    this.navCtrl.push('ProductdetailsPage',{details:product_details});
  }
  seemore(type:number){
    this.navCtrl.push('AllProductsPage',{type:type,id:123});
  }
  //for fav
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

  searchdata(data:string){
    this.page=1;
    this.apis.all_product(1,this.auth_key,data).then(data => {
      this.all_products=data;
      this.total_record=this.all_products.length;
    }).catch((err:string) => {
      this.toast_message(err);
    });
  }

  pagination(infiniteScroll){
    this.page++;
    this.apis.all_product(this.page,this.auth_key,this.search_data).then((data:any )=> {
      this.total_record=data.length;
      for(let i=0;i<data.length;i++){
        this.all_products.push(data[i]);
      }
      infiniteScroll.complete();
    }).catch((error:any) => {
      this.toast_message("No For Product");
      this.total_record=0;
    });
  }

  goChat(){
    this.navCtrl.push('ChatlistPage');
  }
  Vendors(data:Object){
    this.navCtrl.push('VendorProfilePage',{user_info:data});
  }


}
