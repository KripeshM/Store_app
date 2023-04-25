import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/model/product';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{

    allCategory:any[]=[];
    product:Products={};

  constructor(private api:ApiService,private route:Router){}
  ngOnInit(): void {
    this.api.getAllCategory().subscribe((data:any)=>{
      console.log(data);
      this.allCategory=data;
      
    })
  }
  
  addProduct(){
    this.api.addProduct(this.product).subscribe((data:any)=>{
      this.route.navigateByUrl('');
    })
  }

}
