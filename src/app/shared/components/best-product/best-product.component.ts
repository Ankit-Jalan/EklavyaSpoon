import { Component, OnInit} from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { BestProductsService } from '../../services/best-products.service';

@Component({
  selector: 'app-best-product',
  templateUrl: './best-product.component.html',
  styleUrl: './best-product.component.css'
})
export class BestProductComponent implements OnInit {

  bestSellingProducts : ProductModel[] = [];

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};

  constructor(public bestProductService : BestProductsService){}

  ngOnInit(): void {
    this.bestSellingProducts = this.bestProductService.getBestProduct();
  }
}
