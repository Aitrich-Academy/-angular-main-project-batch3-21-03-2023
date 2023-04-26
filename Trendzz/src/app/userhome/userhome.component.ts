import { Component, OnInit } from '@angular/core';

import { ProductInfoService } from '../services/product-info.service';
import { cardData } from '../class/datauser';
import { CategoryService } from '../services/category.service';
import { Category } from '../class/category';
import { UserserviceService } from '../services/userservice.service';




@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit{


  data: cardData[]=[];
  categoryData : Category[] =[];
  

  constructor(private info : ProductInfoService , private category : CategoryService,private userService:UserserviceService){
    
  }

  ngOnInit(): void {
    this.info.productInfo().subscribe((res)=>
    {
     this.data=res;
    })
     this.categoryData = this.category.getCategory()

  }
  

}

