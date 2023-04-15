import { Injectable } from '@angular/core';
import { Category } from '../class/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryData : Category[] =[
    {
      _id:1,
      image:"../../../assets/images/image 12.png",
      category: 'Skin Care'
    },
    {
      _id:2,
      image:"../../../assets/images/image 12-1.png",
      category: 'Laptops & PC'
    },
    {
      _id:3,
      image:"../../../assets/images/image 12.5.png",
      category: 'Smartphones'
    },
    {
      _id:4,
      image:"../../../assets/images/image 12-2.png",
      category: 'Fashion'
    },
    {
      _id:5,
      image:"../../../assets/images/image 12-3.png",
      category: 'Electronics'
    },
    
    {
      _id:6,
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
