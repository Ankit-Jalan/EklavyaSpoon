import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/components/home/home.component';
import { AboutUsComponent } from './public/components/about-us/about-us.component';
import { ContactUsComponent } from './public/components/contact-us/contact-us.component';

const routes: Routes = [
  {path:"home", component : HomeComponent},
  {path:"about-us",component: AboutUsComponent},
  {path:"contact-us",component: ContactUsComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
