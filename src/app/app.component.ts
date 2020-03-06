import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController,Events,App,ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SessionProvider } from '../providers/providers';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppCon } from './app.global';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any ;
  pages: Array<{title: string, component: any}>;
  Users:any=[];
  is_login:boolean=false;
  counter:number=0;
  constructor(private iab: InAppBrowser,private toast:ToastController, private app:App,private event:Events,private alertctrl:AlertController, private session:SessionProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    if(typeof this.session.get_session('user_info')==='object'){
      this.Users=this.session.get_session('user_info');
      console.log(this.Users, typeof this.Users.id );
      if(typeof this.Users.id == 'undefined'){
        localStorage.clear();
        this.rootPage ='HomePage';
      }else{
        this.rootPage ='HomePage';
        this.is_login=true;
        if(this.Users.image.length==0){
          this.Users.image=AppCon.defult_product_image;
        }
      }
     
    }else{
      this.rootPage ='LandingPage';
    }
    this.event.subscribe('information', (data:any) => {
      this.Users=JSON.parse(data);
      if(this.Users.image.length==0){
        this.Users.image=AppCon.defult_product_image;
      }
    });
    this.event.subscribe('is_login', (data:boolean) => {
       this.is_login=data;
    });
    // android back button 
    platform.registerBackButtonAction(() => {
      let nav1 = app.getActiveNavs()[0];
      let activeView = nav1.getActive();
      if(activeView.name === "HomePage" || activeView.name === "VerifyPage" || activeView.name === "VerifiedPage") {
        if (this.counter == 0) {
            this.counter++;
            this.toast_message('Press again to exit');
            setTimeout(() => { this.counter = 0 }, 3000)
          } else {
            platform.exitApp();
          }
      }else{
      nav1.pop();
    }
  });
}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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



  openPage(page:string,...number) {
   if(number[0]==1){
    this.nav.setRoot(page,{type:1});
   }else{
    this.nav.setRoot(page);
   }
    
  }
  logout(){
    let confirm = this.alertctrl.create({
      title: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Yes, Log Out',
          handler: () => {
          localStorage.clear();
          this.session.delete_session();
          this.is_login=false;
          this.rootPage ='LoginPage';
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


  term(url:string){
    this.iab.create(url);
  }
 
}
