import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allProducts:any=[],searchKey:string,propName:string): any[] {
    const result:any=[];
    if(!allProducts||searchKey==''||propName==''){
      return allProducts;
    }
    allProducts.forEach((product:any)=>{
      if(product[propName].trim().toLowerCase().startsWith(searchKey.toLocaleLowerCase())){
        result.push(product);
      }
    })
    return result;
  }

}
