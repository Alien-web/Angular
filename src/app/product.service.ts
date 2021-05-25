import { Products } from './mock-products';
import { Product } from './product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
   }

getProducts(){
  return Products;
}
}
