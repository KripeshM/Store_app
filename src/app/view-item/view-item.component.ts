import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  productId:any;
  product:any;
  categoryId:any;
  categoryName:any;
constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

ngOnInit(): void {
  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data);
    this.productId=data.itemId;

    this.api.viewProduct(this.productId).subscribe((data:any)=>{
      console.log(data);
      this.product=data;
      

      this.categoryId=data.categoryId;
      this.api.getCategoryName(this.categoryId).subscribe((data:any)=>{
        this.categoryName=data.name;
        
      })
    })
  })
  
}

}
