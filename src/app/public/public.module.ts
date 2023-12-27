import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HomeComponent,AboutUsComponent]
})
export class PublicModule { }
