import { Product } from './../product';
import { Products } from './../mock-products';
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
  products=Products;
  selectedProduct:Product={id:0,name:"",code:"",description:"",availability:"", price:0,rating:0,image:"",catagory:"",tags:[]};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.selectProduct(this.id);
  }
  selectProduct(id:number) {
   for(let i=0;i<5;i++){
     if(this.products[i].id==id)
     {this.selectedProduct=this.products[i];}
   }
 }
 counter(i: number) {
  return new Array(i);
}

}
