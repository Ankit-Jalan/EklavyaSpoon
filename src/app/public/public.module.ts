import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HomeComponent,AboutUsComponent,ContactUsComponent]
})
export class PublicModule { }
