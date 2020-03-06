import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController,LoadingController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { ApisProvider,SessionProvider } from '../../providers/providers';
import { AppCon } from '../../app/app.global';

/**
 * Generated class for the VendorProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor-profile',
  templateUrl: 'vendor-profile.html',
})
export class VendorProfilePage  {
  public product_by:any={
    id:0,
    type:1,
    page:1,
    is_my:0,
    auth_key:'?auth_key='
  };
  app_statics:any=AppCon;
  tab:string='all';
  position: Object = { lat: -25.363, lng: 131.044 };
  map: Object;
  marker: Object;
  zoom: number;
  user_info:any;
  user_info1:any;
  products:any=[];
  is_login:boolean=false;
  total_record:number;
  @ViewChild('map') mapRef: ElementRef;
  constructor(private session:SessionProvider,private loadingCtrl:LoadingController,private alterctrl:AlertController,public toast:ToastController,private apis:ApisProvider,public navCtrl: NavController, public navParams: NavParams) {
    if(this.session.get_session('user_info')){
      this.is_login=true;
      this.user_info=this.session.get_session('user_info');
      this.product_by.auth_key="?auth_key="+this.user_info.auth_key;
    }
    if(!this.navParams.get('user_info')){
      this.navCtrl.pop();
    }else{
      this.user_info1=this.navParams.get('user_info');
      this.product_by.id=this.user_info1.id;

      this.position['lat']=parseFloat(this.user_info1['latitude']);
      this.position['lng']=parseFloat(this.user_info1['longitude']);
    }
    this.get_products(this.product_by);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorProfilePage');
  
      //used setTimeout google map is delayed in loading, in stackBlitz
  
      // setTimeout(() => {
      //   this.map = new google.maps.Map(this.mapRef.nativeElement, {
      //     zoom: 4,
      //     center: this.position
      //   });
      //   this.marker = new google.maps.Marker({
      //     position: this.position,
      //     map: this.map
      //   });
  
      // // }, 2000)
  
      //console.log(this.map.getZoom())
    }
    get_products(filter){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
     
        this.apis.page_product(filter).then(data => {
          this.products=data;
          this.total_record=this.products.length;
          loading.dismiss();
        }).catch((err:string) => {
          this.toast_message(err);
        });
      
      
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
    tab_swap(type:string){
      this.tab=type;
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
  
    back(){
      this.navCtrl.pop();
    }
    maps():void{

    }
}
