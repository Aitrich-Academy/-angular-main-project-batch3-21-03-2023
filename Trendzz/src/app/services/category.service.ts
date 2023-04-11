import { Injectable } from '@angular/core';
import { Category } from '../class/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryData : Category[] =[
    {
      image:"../../../assets/images/image 12.png",
      category: 'Skin Care'
    },
    {
      image:"../../../assets/images/image 12-1.png",
      category: 'Laptops & PC'
    },
    {
      image:"../../../assets/images/image 12.5.png",
      category: 'Smartphones'
    },
    {
      image:"../../../assets/images/image 12-2.png",
      category: 'Fashion'
    },
    {
      image:"../../../assets/images/image 12-3.png",
      category: 'Electronics'
    },
    
    {
      image:"../../../assets/images/image 12.6.png",
      category: 'Lifestyle'
    }
    ,
    
    // {
    //   image:"../../../assets/images/cleaning.jpg",
    //   category: 'Cleaning'
    // }

  ]

  constructor() { }

  getCategory(){
    return this.categoryData;
  }
}
