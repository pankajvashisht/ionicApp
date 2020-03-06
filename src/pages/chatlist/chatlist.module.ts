import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatlistPage } from './chatlist';

@NgModule({
  declarations: [
    ChatlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatlistPage),
  ],
})
export class ChatlistPageModule {}
