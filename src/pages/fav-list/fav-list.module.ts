import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavListPage } from './fav-list';

@NgModule({
  declarations: [
    FavListPage,
  ],
  imports: [
    IonicPageModule.forChild(FavListPage),
  ],
})
export class FavListPageModule {}
