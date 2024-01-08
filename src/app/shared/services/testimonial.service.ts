import { Injectable } from '@angular/core';
import { TestimonialModel } from 'src/app/models/testimonial.model';

@Injectable()

export class TestimonialService {

  constructor() { }

  public getTestimonial(): TestimonialModel[] {
    return [{
      "customer_name": "Ankit Jalan",
      "review_desc": "This product is very shiny, strong and premium.",
      "customer_type": "Software Engineer",
      "review_star": 5
    },
    {
      "customer_name": "Deepak Kedia",
      "review_desc": "This product is very shiny, strong and premium.",
      "customer_type": "Charted Accounted",
      "review_star": 5
    }
      ,
    {
      "customer_name": "Neha Kedia",
      "review_desc": "This product is very shiny, strong and premium.",
      "customer_type": "Charted Accounted",
      "review_star": 5
    }
      ,
    {
      "customer_name": "Debina Kedia",
      "review_desc": "This product is very shiny, strong and premium.This product is very shiny, strong and premium.",
      "customer_type": "Charted Accounted",
      "review_star": 5
    }
    ];
  }
}
