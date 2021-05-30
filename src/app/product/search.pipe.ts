import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products: any[], searchProduct: string): any[] {
    if(!products) return [];
    if(!searchProduct) return products;
    searchProduct = searchProduct.toLowerCase();
    return products.filter( product => {
      return product.productName.toLowerCase().includes(searchProduct);
    });
   }
}


