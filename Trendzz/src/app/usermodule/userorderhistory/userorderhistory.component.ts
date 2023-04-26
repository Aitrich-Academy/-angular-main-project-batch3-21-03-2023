import { Component, OnInit } from '@angular/core';
import { ProductInfoService } from 'src/app/services/product-info.service';
import { orderhistory } from '../userlanding/data';

@Component({
  selector: 'app-userorderhistory',
  templateUrl: './userorderhistory.component.html',
  styleUrls: ['./userorderhistory.component.css']
})
export class UserorderhistoryComponent implements OnInit{
user:any;
userid:any;
u_Id:any;

ohProducts:any;
constructor(private productservice:ProductInfoService){

}




ngOnInit(): void {
  this.user=localStorage.getItem('userlog');
  this.userid=JSON.parse(this.user)
console.log(this.userid[0].id);
this.u_Id=this.userid[0].id;

this.productservice.getOrderHistory(this.u_Id).subscribe((result)=>
{
  console.log(result)
this.ohProducts=result;
})
  
}




}
