import { Component, OnInit } from '@angular/core';

import { ProductInfoService } from '../services/product-info.service';
import { cardData } from '../class/datauser';
import { CategoryService } from '../services/category.service';
import { Category } from '../class/category';




@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit{


  data: cardData[] = [];
  categoryData : Category[] =[];
  

  constructor(private info : ProductInfoService , private category : CategoryService){}

  ngOnInit(): void {
     this.data = this.info.productInfo();
     this.categoryData = this.category.getCategory()

  }
  productPlaceOrder(_Image:any,_Name:any,_Amt:any)
  {
     console.log(_Image,_Name,_Amt)
  }

}

