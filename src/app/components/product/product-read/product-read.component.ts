import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  isLoading = true;

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      this.isLoading = false;

      console.log(products);
    })
  }

}
