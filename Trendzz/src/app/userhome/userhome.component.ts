import { Component, OnInit } from '@angular/core';

import { ProductInfoService } from '../services/product-info.service';
import { cardData } from '../class/datauser';
import { CategoryService } from '../services/category.service';
import { Category } from '../class/category';
import { LoginData } from '../class/loginData';
import { Router } from '@angular/router';




@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit{
  data1 : LoginData = {
    email : '',
    password: ''
  }
  email : string = '';
  password : string = '';


    name : string = '';
    gmail : string = '';
    gpassword: string = ''










  data: cardData[] = [];
  categoryData : Category[] =[];
  

  constructor(private info : ProductInfoService , private category : CategoryService , private route : Router){}

  ngOnInit(): void {
     this.data = this.info.productInfo();
    // this.info.productInfo().subscribe(product =>{
    //   this.data = product
    // });

     this.categoryData = this.category.getCategory();
  

  }

  Login(){
    if(this.email === "user@gmail.com" && this.password === "user"){
      this.route.navigate(['/profile']);
           
    }
    
   

  }

  signUp(){
    // console.log("Sign Up works")
    
  }
  productPlaceOrder(_Image:any,_Name:any,_Amt:any)
  {
     console.log(_Image,_Name,_Amt)
  }

}

