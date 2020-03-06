import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppCon } from '../../app/app.global';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  login(data:any,device_token:string){
    let form = new FormData();
    form.append('email',data.email);
    form.append('password',data.password);
    form.append('device_token',device_token);
    return new Promise((resolve, reject) => {
      this.http.post(AppCon.url+'login',form).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  signup(data:any){
    let form = new FormData();
    form.append('email',data.email);
    form.append('password',data.password);
    form.append('first_name',data.first_name);
    form.append('last_name',data.last_name);
    form.append('phone',data.phone);
    form.append('country_code',data.country_code);
    return new Promise((resolve, reject) => {
      this.http.post(AppCon.url+'signup',form).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  changepassword(old_password:string,new_password:string,auth_key:string){
    let form = new FormData();
    form.append('new_password',new_password);
    form.append('old_password',old_password);
    form.append('auth_key',auth_key);
    return new Promise((resolve, reject) => {
      this.http.post(AppCon.url+'change_password',form).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

  update_profile(user_info:any){
    let form = new FormData();
    if(typeof user_info.photo === 'object'){
      form.append('photo',user_info.photo);
    }
    form.append('first_name',user_info.first_name);
    form.append('last_name',user_info.last_name);
    form.append('auth_key',user_info.auth_key);
    return new Promise((resolve, reject) => {
      this.http.post(AppCon.url+'update_profile',form).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
  }

 verifiy_otp(otp:any,auth_key:string,device_token:string){
    let form = new FormData();
    form.append('otp',otp.otp);
    form.append('auth_key',auth_key);
    form.append('device_token',device_token);
    return new Promise((resolve, reject) => {
      this.http.post(AppCon.url+'verifiy_otp',form).subscribe((data:any) => {
        let body=data.body;
        resolve(body);
      }, err => {
        let error = err.error.error_message;
        reject(error);
      });
    });
 }

 resend(auth_key:string){
  let form = new FormData();
  form.append('auth_key',auth_key);
  return new Promise((resolve, reject) => {
    this.http.post(AppCon.url+'resend_otp',form).subscribe((data:any) => {
      let body=data.body;
      resolve(body);
    }, err => {
      let error = err.error.error_message;
      reject(error);
    });
  });
 }
 
 forgot_password(email:any){
  let form = new FormData();
  form.append('email',email.email);
  return new Promise((resolve, reject) => {
    this.http.post(AppCon.url+'forgot_password',form).subscribe((data:any) => {
      let body=data.body;
      resolve(body);
    }, err => {
      let error = err.error.error_message;
      reject(error);
    });
  });
 }

 all_country(){
  return new Promise((resolve, reject) => {
    this.http.get(AppCon.url+'get_country').subscribe((data:any) => {
      let body=data.body;
      resolve(body);
    }, err => {
      let error = err.error.error_message;
      reject(error);
    });
  });
 }

 send_query(data:any){
  let form = new FormData();
  form.append('auth_key',data.auth_key);
  form.append('message',data.message);
  form.append('vender_id',data.vender_id);
  form.append('table_type',data.table_type);
  form.append('table_id',data.table_id);
  return new Promise((resolve, reject) => {
    this.http.post(AppCon.url+'send_query',form).subscribe((data:any) => {
      let body=data.body;
      resolve(body);
    }, err => {
      let error = err.error.error_message;
      reject(error);
    });
  });
 }

}
