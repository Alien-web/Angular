import { Products } from './mock-products';
import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) {
   }
getProducts(){
  return Products;
}
get(): Observable<any> {
  return this.http.get("../assets/products.json");
}
}
