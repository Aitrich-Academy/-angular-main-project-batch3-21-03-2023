import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { cardData } from '../class/datauser';


@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  data : cardData[] = [

  {
    p_id:1,
    productImage : '../../../assets/images/Rectangle 5.png',
    category: 'Laptop & PC',
    productName: 'ASUS X441UV',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  2800,
  },

  {
    p_id:2,
  productImage : '../../../assets/images/Rectangle 5-1.png',
  category: 'Smartphones',
  productName: 'Iphone 14',
  productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
  amount:  588,
  },

  {
    p_id:3,
  productImage : '../../../assets/images/Laptop.png',
  category: 'Laptop & PC',
  productName: 'ASUS ZENBOOK C103',
  productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
  amount:  800,
  },

  {
    p_id:4,
    productImage : '../../../assets/images/Rectangle 5-2.png',
    category: 'Smartphones',
    productName: 'SAMSUNG 4531',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  3000,
  },

  {
    p_id:5,
    productImage : '../../../assets/images/Rectangle 5 (7).png',
    category: 'Fashion',
    productName: 'BAJU WANITA SIMPLE',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  888,
  }
  ,
  {
    p_id:6,
    productImage : '../../../assets/images/Rectangle 5 (6).png',
    category: 'Fashion',
    productName: 'Tas Kece',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  4800,
  }
  ,
  {
    p_id:7,
    productImage : '../../../assets/images/Rectangle 5-4.png',
    category: 'Electronics',
    productName: 'Pemberish Hidung',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  2500,
  }
  ,
  {
    p_id:8,
    productImage : '../../../assets/images/Rectangle 5-3.png',
    category: 'Accessories',
    productName: 'Kable Data Type C',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  3300,
  },
]
 

  constructor(private http: HttpClient) { }

  productInfo(){
    return this.data;

  }
}
