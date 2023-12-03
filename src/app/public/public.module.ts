import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
