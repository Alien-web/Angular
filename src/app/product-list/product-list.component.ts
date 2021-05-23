import { Component, OnInit } from '@angular/core';
import { Products } from '../mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products=Products;
  counter(i: number) {
    return new Array(i);
}
  constructor() { }

  ngOnInit(): void {
  }

}
