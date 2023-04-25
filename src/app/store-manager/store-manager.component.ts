import { Component, OnInit } from '@angular/core';
import { Products } from 'src/model/product';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-store-manager',
  templateUrl: './store-manager.component.html',
  styleUrls: ['./store-manager.component.css']
})
export class StoreManagerComponent implements OnInit{

  loginDate:any;
  allProducts:Products[]=[];
  searchKey:string='';

  constructor(private api:ApiService){
    this.loginDate=new Date();
  }

  ngOnInit(): void {
    this.getAllProducts();
    }
    getAllProducts(){
      this.api.getAllProducts().subscribe((data:any)=>{
        console.log(data);
        this.allProducts=data;
      })
  }

  deleteProduct(productId:any){
    this.api.deleteProduct(productId).subscribe((data:any)=>{
      alert("Product Deleted");
      this.getAllProducts();
    })
  }

  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value;
  }

}
