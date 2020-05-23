import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,InfiniteScroll } from 'ionic-angular';
import { Content } from 'ionic-angular/index';
import { ApisProvider,SessionProvider } from '../../providers/providers';
/**
 * Generated class for the AllchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allchat',
  templateUrl: 'allchat.html',
})

export class AllchatPage {
  @ViewChild(Content) content: Content;
  messages :string;
  image :any ;
  text :any;
  user_id :any;
  thread_id:number;
  public all_message:any = [];
  is_show:boolean;
  userdata:any;
  myimage:string;
  validresponse:any;
  another_user_name:string;
  another_user_image:string;
  authkey:string;
  message:string;
  friend_id:string;
  product_id:string;
  type:string='0';
  user_info:any=[];
  page:number=1;
  total_record:number;
  displaychat:string='chat';
  constructor(private api :ApisProvider,public toastCtrl:ToastController, private session:SessionProvider,public navCtrl: NavController, public navParams: NavParams) {
    if(this.navParams.get('product_id')){
      this.product_id=this.navParams.get('product_id');
      this.friend_id=this.navParams.get('user_id');
    }else{
      this.navCtrl.push('HomePage');
    }
    if(this.session.get_session('user_info')){
      this.user_info=this.session.get_session('user_info');
    }else{
      this.navCtrl.push('HomePage');
    }
    if(this.navParams.get('message')){
      //message
      console.log(this.navParams.get('message'));
      this.all_message=this.navParams.get('message');
      this.total_record=this.all_message.length;
    }else{
      this.get_message();
    }
    if(this.navParams.get('product_name')){
      console.log(this.navParams.get('product_name'));
      this.displaychat=this.navParams.get('product_name');
    }
    //this.get_message();
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad AllchatPage');
  }

  ngAfterViewChecked() {
    //this.scrollBottom();
    
  }

get_message(){
 this.api.get_message(this.friend_id,this.product_id,this.page,this.user_info['auth_key']).then((data:any) => {
  this.all_message=data;
  console.log(this.all_message);
  this.is_show=false;
  this.total_record=this.all_message.length;
  console.log(this.total_record);
}).catch((err)=> {
  let toast = this.toastCtrl.create({
    message: err,
    duration: 3000,
    position: 'buttom'
   });
  toast.present();
});
}


scrollBottom(){
  this.content.resize();
  this.content.scrollTo(0, this.content.scrollHeight, 350);
}

send_message(){

if(this.message=='' || this.message== undefined){
  let toast = this.toastCtrl.create({
       message: "Please Enter the Message",
       duration: 3000,
       position: 'buttom'
      });
   toast.present();
   return ;
}
let object={
  'is_send':1,
  'message':this.message,
  'type':0,
  'created': new Date().getTime()/1000,
  'sender_id':this.user_info.id,
  'product_id':this.product_id,
  'receiver_id':this.friend_id,
  'another_user':''
};
this.all_message.push(object);
this.scrollBottom();
this.message='';
this.api.send_message(this.friend_id,this.product_id,this.type,object.message,this.user_info['auth_key']);

}

 time_ago(previous) {
  let current= new Date().getTime();
  previous=previous*1000;
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;
  let elapsed = current - previous;
  if (elapsed < msPerMinute) {
       return Math.round(elapsed/1000) + ' seconds ago';   
  }
  else if (elapsed < msPerHour) {
       return Math.round(elapsed/msPerMinute) + ' minutes ago';   
  }
  else if (elapsed < msPerDay ) {
       return Math.round(elapsed/msPerHour ) + ' hours ago';   
  }
  else if (elapsed < msPerMonth) {
      return  Math.round(elapsed/msPerDay) + ' days ago';   
  }
  else if (elapsed < msPerYear) {
      return  Math.round(elapsed/msPerMonth) + ' months ago';   
  }
  else {
      return  Math.round(elapsed/msPerYear ) + ' years ago';   
  }
}

string_message(message:string){
  return atob(message);
}
back(){
  this.navCtrl.pop();
}
pagination(infiniteScroll){
  this.page++;
  this.api.get_message(this.friend_id,this.product_id,this.page,this.user_info['auth_key']).then((data:any )=> {
    this.total_record=data.length;
    for(let i=0;i<data.length;i++){
      this.all_message.unshift(data[i]);
    }
    infiniteScroll.complete();
  }).catch((error:any) => {
   // this.toast_message("No For Product");
    this.total_record=0;
  });
}

}
