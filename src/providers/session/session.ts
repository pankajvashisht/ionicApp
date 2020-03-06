import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SessionProvider Provider');
  }

  set_session(name:string,indormation:any):void{
      localStorage.setItem(name,JSON.stringify(indormation));
  }

  get_session(name:string){
    if(localStorage.getItem(name)!=null && localStorage.getItem(name)!=undefined &&localStorage.getItem(name)!='' ){
      return JSON.parse(localStorage.getItem(name));
    }
    return false;
  }

  delete_session(){
    localStorage.clear();
  }

}
