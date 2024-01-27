import { Component, OnInit } from '@angular/core';
import { TestimonialModel } from 'src/app/models/testimonial.model';
import { TestimonialService } from '../../services/testimonial.service';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent  implements OnInit{
  testimonials: TestimonialModel[] = [];

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};

  constructor(public testimonialService : TestimonialService){}

  ngOnInit(): void {
    this.testimonials = this.testimonialService.getTestimonial();
  }

}
