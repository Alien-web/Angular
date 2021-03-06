import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  msg:string="";
  icons:boolean=false;
  searchProduct:string="";
  counter(i: number) {
    return new Array(i);
}
  constructor(private _productservice:ProductService)  {}

  ngOnInit(): void {
    // this.getproduct();
    this.get();
    console.log(this.products)
  }
  // getproduct(){
  //  this.products=this._productservice.getProducts();
  // }
  get(){
    this._productservice.get().subscribe(data=>{
      this.products=data;
    });
  }
  icon(){
    this.icons=!this.icons;
  }
}
