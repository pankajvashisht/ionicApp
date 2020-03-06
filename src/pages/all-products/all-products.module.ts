import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllProductsPage } from './all-products';

@NgModule({
  declarations: [
    AllProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllProductsPage),
  ],
})
export class AllProductsPageModule {}
