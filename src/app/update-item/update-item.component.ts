import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/model/category';
import { Products } from 'src/model/product';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit{

  productId:string='';
  product:Products={};
  allCategory:Category[]=[];

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.itemId);
      this.productId=data.itemId;
      
      this.api.viewProduct(this.productId).subscribe((data:any)=>{
        console.log(data);
        this.product=data;

        this.api.getAllCategory().subscribe((data:any)=>{
          console.log(data);
          this.allCategory=data;
        })
        
      })
    })

  }

  updateProduct(){
    this.api.updateProduct(this.productId,this.product).subscribe((data:any)=>{
      this.route.navigateByUrl('');
    })
  }

}
