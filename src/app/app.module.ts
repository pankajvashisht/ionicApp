import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApisProvider,UserProvider,SessionProvider } from '../providers/providers';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { NlbrPipe,KeyboardAttachPipe,FilterPipe } from '../pipes/pipes';
import { ImagesDirective } from '../directives/images/images';
import { Push } from '@ionic-native/push';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
@NgModule({
  declarations: [
    MyApp,
    NlbrPipe,
    FilterPipe,
    KeyboardAttachPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApisProvider,
    HttpClient,
    UserProvider,
    KeyboardAttachPipe,
    ImagesDirective,
    Push,
    InAppBrowser,
    SocialSharing,
    SessionProvider
  ]
})
export class AppModule {}
