import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { ApisProvider,SessionProvider } from '../../providers/providers';
/**
 * Generated class for the GetDemondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-demond',
  templateUrl: 'get-demond.html',
})
export class GetDemondPage implements OnInit {
  products:any=[];
  total_record:number=0;
  product_by:any={
    page:1,
    auth_key:'',
    is_my:'1'
  };
  user_info:any;
  constructor(private session:SessionProvider,private apis:ApisProvider,private loadingCtrl:LoadingController,private toast:ToastController,public navCtrl: NavController, public navParams: NavParams) {
    if(this.session.get_session('user_info')){
      this.user_info=this.session.get_session('user_info');
      this.product_by.auth_key="?auth_key="+this.user_info.auth_key;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetDemondPage');
  }

  ngOnInit(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.apis.demond_product(this.product_by).then(data => {
      this.products=data;
      this.total_record=this.products.length;
      loading.dismiss();
    }).catch((err:string) => {
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
  pagination(infiniteScroll){
    this.product_by.page++;
    this.apis.demond_product(this.product_by).then((data:any )=> {
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
    this.navCtrl.push("HomePage");
  }
  doRefresh(refresher){
    this.apis.demond_product(this.product_by).then(data => {
      this.products=data;
      refresher.complete();
      this.total_record=this.products.length;
    }).catch((err:string) => {
      this.toast_message(err);
      refresher.complete();
    });
  }
}
