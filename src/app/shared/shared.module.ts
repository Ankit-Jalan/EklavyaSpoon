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
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    SliderComponent,
    ProductSlideComponent,
    TestimonialComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule   
  ],
  exports:[HeaderComponent, FooterComponent, SearchbarComponent,SliderComponent,ProductSlideComponent,TestimonialComponent],
  providers:[TestimonialService]
})
export class SharedModule { }
