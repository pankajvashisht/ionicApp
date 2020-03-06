import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController,ToastController } from 'ionic-angular';
import { ApisProvider,SessionProvider } from '../../providers/providers';
import { AppCon } from '../../app/app.global';

/**
 * Generated class for the FavListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav-list',
  templateUrl: 'fav-list.html',
})
export class FavListPage {
  products:any=[];
  app_statics:any=AppCon;
  total_record:number=0;
  page:number=1;
  is_login:boolean=true;
  user_info:any=[];
  constructor(private session:SessionProvider,private alterctrl:AlertController ,public toast:ToastController, public navCtrl: NavController,private apis:ApisProvider,private loadingCtrl:LoadingController, public navParams: NavParams) {
    if(!this.session.get_session('user_info')){
     this.navCtrl.push('HomePage');
    }else{
      this.user_info=this.session.get_session('user_info');
    }
    this.get_products();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavListPage');
  }

  get_products(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.apis.get_fav(this.page,this.user_info['auth_key']).then(data => {
      this.products=data;
      this.total_record=this.products.length;
      loading.dismiss();
    }).catch((error:any) => {
      loading.dismiss();
      this.toast_message("No fav Product");
      this.total_record=0;
    });;
  }
  pagination(infiniteScroll){
    this.page++;
    this.apis.get_fav(this.page,this.user_info['auth_key']).then((data:any )=> {
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
    //this.navCtrl.pop();
    this.navCtrl.push('HomePage');
  }

  do_fav(object:any){
      let id =object.id;
      let index = this.products.indexOf(object);
      this.products.splice(index,1);
      this.apis.do_fav(id).then((data:string) => {
          this.toast_message(data);
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
