import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppCon } from '../../app/app.global';
import {SessionProvider} from '../session/session';
import { Events  } from 'ionic-angular';
/*
  Generated class for the ApisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApisProvider {

  is_login:boolean=false;
  user_info:any=[];
  key:string='';
  page_key:string='?auth_key=';
  constructor(private event: Events,public http: HttpClient,private session:SessionProvider) {
    if(this.session.get_session('user_info')){
      this.is_login=true;
      this.user_info=this.session.get_session('user_info');
      this.key="?auth_key="+this.user_info.auth_key;
      this.page_key="?auth_key="+this.user_info.auth_key;
    }
    this.event.subscribe('information', (data:any) => {
      this.user_info=data;
      this.key="?auth_key="+this.user_info.auth_key;
      this.page_key="?auth_key="+this.user_info.auth_key;
    });
    this.event.subscribe('is_login', (data:boolean) => {
       this.is_login=data;
    });
  }

  top_ten_category(...limit){
    let limits='';
    if(limit[0]==25){
        limits="?limit=25";
    }
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'top_ten_category'+limits).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  top_ten_vendor(){
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'top_ten_vender').subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  top_ten_feature(){
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'top_ten_featured'+this.key).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  top_ten_sale(){
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'top_ten_sale'+this.key).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  all_product(page:number,key,...object){
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'all_product/page:'+page+'?auth_key='+key+'&search_key='+object).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  page_product(object:any){
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'all_product/page:'+object.page+object.auth_key+'&type='+object.type+'&value='+object.id).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }
  demond_product(object:any){
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'demond_product/page:'+object.page+object.auth_key+'&type='+object.type+'&value='+object.id+"&is_my="+object.is_my).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }
  saerch(object:any){
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'all_product/page:'+object.page+'?auth_key='+object.auth_key+'&search_key='+object.search_key).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }
  do_fav(id:string){
    let form = new FormData();
    form.append('auth_key',this.user_info.auth_key);
    form.append('product_id',id);
    return new Promise((resolve, reject) => {
      this.http.post(AppCon.url+'do_fav',form).subscribe((data:any) => {
        let body=data.message;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  get_fav(page:number,keys:string){
    console.log('pankaj',keys);
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'fav_product/page:'+page+'?auth_key='+keys).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  send_message(friend_id:string,product_id:string,type:string,message:string,keys:string){
    let form = new FormData();
    form.append('auth_key',keys);
    form.append('product_id',product_id);
    form.append('receiver_id',friend_id);
    form.append('type',type);
    form.append('message',message);
    return new Promise((resolve, reject) => {
      this.http.post(AppCon.url+'send_message',form).subscribe((data:any) => {
        let body=data.message;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  get_message(receiver_id:string,product_id:string,page:number,keys:string){
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'get_chat/page:'+page+'?auth_key='+keys+"&receiver_id="+receiver_id+"&product_id="+product_id).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }
  last_chat(auth_key:string,page:number,...name){
    let serach='';
    if(name[0]){
      serach=name[0];
     }
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'last_chat/page:'+page+"?auth_key="+auth_key+"&name="+serach).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  sub_category(id:number){
  
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'get_sub_category?category_id='+id).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  third_category(id:number){
  
    return new Promise((resolve, reject) => {
      this.http.get(AppCon.url+'get_third_category?sub_category_id='+id).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  add_demond(data:any,auth_key:string,image:any){
    let form = new FormData();
    form.append('auth_key',auth_key);
    form.append('name',data.name);
    form.append('image',image);
    form.append('min',data.min);
    form.append('max',data.max);
    form.append('category_id',data.category_id);
    form.append('sub_category_id',data.sub_category_id);
    form.append('third_level_category_id',data.third_category_id);
    form.append('detail',data.discription);
    form.append('qty',data.qty);
    return new Promise((resolve, reject) => {
      this.http.post(AppCon.url+'create_demond',form).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }
 

}
