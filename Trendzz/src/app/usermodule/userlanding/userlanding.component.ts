import { Component, OnInit } from '@angular/core';
import { cardData } from './data';

@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.css']
})
export class UserlandingComponent implements OnInit { 

  data : cardData[] = [ {
    productImage : '../../../assets/images/Rectangle 5.png',
    category: 'Laptop & PC',
    productName: 'ASUS X441UV',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  2800,
  },

  {
  productImage : '../../../assets/images/Rectangle 5-1.png',
  category: 'Smartphones',
  productName: 'Iphone 14',
  productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
  amount:  588,
  },

  {
  productImage : '../../../assets/images/Laptop.png',
  category: 'Laptop & PC',
  productName: 'ASUS ZENBOOK C103',
  productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
  amount:  800,
  },

  {
    productImage : '../../../assets/images/Rectangle 5-2.png',
    category: 'Smartphones',
    productName: 'SAMSUNG 4531',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  3000,
  },

  {
    productImage : '../../../assets/images/Rectangle 5 (7).png',
    category: 'Fashion',
    productName: 'BAJU WANITA SIMPLE',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  888,
  }
  ,
  {
    productImage : '../../../assets/images/Rectangle 5 (6).png',
    category: 'Fashion',
    productName: 'Tas Kece',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  4800,
  }
  ,
  {
    productImage : '../../../assets/images/Rectangle 5-4.png',
    category: 'Electronics',
    productName: 'Pemberish Hidung',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  2500,
  }
  ,
  {
    productImage : '../../../assets/images/Rectangle 5-3.png',
    category: 'Accessories',
    productName: 'Kable Data Type C',
    productDesc:'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo....',
    amount:  3300,
  }

  



  ]

  constructor(){}

  ngOnInit(): void {
      
  }




}
