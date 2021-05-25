import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  products:Product[]=[];
  selectedProduct:Product={productId:0,productName:"",productCode:"",description:"",releaseDate:"", price:0,starRating:0,imageUrl:""};
  constructor(private route: ActivatedRoute,private _productservice:ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getproduct();
    this.selectProduct(this.id);
  }
  selectProduct(id:number) {
   for(let i=0;i<5;i++){
     if(this.products[i].productId==id)
     {this.selectedProduct=this.products[i];}
   }
 }
 getproduct(){
  this.products=this._productservice.getProducts();
 }
 
 counter(i: number) {
  return new Array(i);
}

}
