import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
@Injectable()

export class BestProductsService {

  constructor() { }

  public getBestProduct(): ProductModel[] {
    return [{
      "name": "Small Spoon",
      "description": "This product is very shiny, strong and premium.",
      "type": "Serveware",
      "review_star": 5,
      "price" : 15,
      "image_path" : "assets/images/spoon2.jpg"
    },
    {
      "name": "Medium Spoon",
      "description": "This product is very shiny, strong and premium.",
      "type": "Serveware",
      "review_star": 5,
      "price" : 15,
      "image_path" : "assets/images/spoon2.jpg"
    }
      ,
      {
        "name": "Large Spoon",
        "description": "This product is very shiny, strong and premium.",
        "type": "Serveware",
        "review_star": 5,
        "price" : 15,
        "image_path" : "assets/images/spoon2.jpg"
      }
      ,
      {
        "name": "Tea Spoon",
        "description": "This product is very shiny, strong and premium.",
        "type": "Serveware",
        "review_star": 5,
        "price" : 15,
        "image_path" : "assets/images/spoon2.jpg"
      }
    ];
  }

}
