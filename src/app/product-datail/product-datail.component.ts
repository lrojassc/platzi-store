import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../products.service';

@Component({
  selector: 'app-product-datail',
  templateUrl: './product-datail.component.html',
  styleUrls: ['./product-datail.component.scss']
})
export class ProductDatailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      const id = params.id;
      const product = this.productsService.getProduct(id);
      console.log(product);
    });
  }

}
