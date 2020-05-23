import { Component,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { ApisProvider } from '../../providers/providers';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage implements OnInit {
  main_category:any=[];
  type:number=0;
  text:string='Categories';
  step:number=0;
  sub_category:any=[];
  third_category:any=[];
  last_name:string;
  constructor( private toast:ToastController, private loadingCtrl:LoadingController,private apis:ApisProvider, public navCtrl: NavController, public navParams: NavParams) {
    if(this.navParams.get('type')){
      this.type=1;
      this.text="Demand Categories";
    }
    console.error(this.type);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  ngOnInit(){
   
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.apis.top_ten_category(25).then(data => {
        this.main_category=data;
        loading.dismiss();
      }).catch((err:string) => {
        loading.dismiss();
        this.toast_message(err);
      });
  }
  product(id:number,type:number,name:string){
    this.step++;
    this.last_name=this.text;
    this.text=name;
    if(this.step==1){
      this.sub_category=[];
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.apis.sub_category(id).then((data:any) => {
        this.sub_category=data;
       
        loading.dismiss();
      }).catch((err:string) => {
        loading.dismiss();
        this.toast_message(err);
      });
    }else if(this.step==2){
      this.third_category=[];
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.apis.third_category(id).then(data => {
        this.third_category=data;
        loading.dismiss();
      }).catch((err:string) => {
        loading.dismiss();
        this.toast_message(err);
      });
    }else if(this.step==3){
      this.navCtrl.push('AllProductsPage',{type:type,id:id,demond:this.type});
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
    this.step--;
    if(this.step<1){
      this.text=(this.type==0)?"Categories":"Demand Categories";
    }else{
      this.text=this.last_name;
    }
  }

}