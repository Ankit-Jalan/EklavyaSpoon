import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductSlideComponent } from './components/product-slide/product-slide.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
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
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,MatInputModule, MatFormFieldModule, MatListModule   
  ],
  exports:[HeaderComponent, FooterComponent, SearchbarComponent,SliderComponent,ProductSlideComponent,TestimonialComponent]
})
export class SharedModule { }
