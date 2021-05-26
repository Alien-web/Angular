import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  products:Product[]=[];
  selectedProduct:any;
  constructor(private route: ActivatedRoute,private _productservice:ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getproduct();
    this.get();
    this.selectProduct(this.id);
  }
  selectProduct(id:number) {
  //  for(let i=0;i<5;i++){
  //    if(this.products[i].productId==id)
  //    {this.selectedProduct=this.products[i];}
  //  }
  //  this.products.forEach(item=>{
  //     if(item.productId==id)
  //     {this.selectedProduct=item}
  //  });
   this.selectedProduct=this.products.find(x=>x.productId==id);
 }
 getproduct(){
  this.products=this._productservice.getProducts();
 }
 get(){
  this._productservice.get().subscribe(data=>{
    this.products=data;
  });
}
 
 counter(i: number) {
  return new Array(i);
}

}
