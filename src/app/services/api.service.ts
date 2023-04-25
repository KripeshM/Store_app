import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:3000/products";

  getAllProducts():Observable<Products>{
    return this.http.get(this.baseUrl);
  }

  viewProduct(productId:any){
    return this.http.get(`${this.baseUrl}/${productId}`);
  }

  getCategoryName(categoryId:any){
    return this.http.get('http://localhost:3000/category/'+categoryId);
  }


  getAllCategory(){
    return this.http.get('http://localhost:3000/category');
  }

  addProduct(productBody:any){
    return this.http.post(this.baseUrl,productBody)
  }

  deleteProduct(productId:any){
    return this.http.delete(`${this.baseUrl}/${productId}`)
  }

  updateProduct(productId:any,productBody:any){
    return this.http.put(`${this.baseUrl}/${productId}`,productBody);
  }
}
