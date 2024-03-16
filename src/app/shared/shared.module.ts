import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductSlideComponent } from './components/product-slide/product-slide.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TestimonialService } from './services/testimonial.service';
import { BestProductComponent } from './components/best-product/best-product.component';
import { BestProductsService } from './services/best-products.service';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    SliderComponent,
    ProductSlideComponent,
    TestimonialComponent,
    BestProductComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  exports:[HeaderComponent, FooterComponent, SearchbarComponent,SliderComponent,ProductSlideComponent,TestimonialComponent,BestProductComponent],
  providers:[TestimonialService,BestProductsService]
})
export class SharedModule { }
