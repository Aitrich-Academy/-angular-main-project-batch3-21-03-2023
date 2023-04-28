import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfoService } from 'src/app/services/product-info.service';
import { cardData } from '../userlanding/data';


@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit{

p_id:any;
productData:cardData | undefined;
user:any;
userid:any;
u_Id:any;
constructor(private productservice:ProductInfoService,private activateroute:ActivatedRoute)
{
    


}

ngOnInit(): void {
  this.p_id=this.activateroute.snapshot.paramMap.get('pid');
  console.log(this.p_id);

this.p_id && this.productservice.getProduct(this.p_id).subscribe((data)=>{
  console.log(data);
  this.productData=data;
})

this.user=localStorage.getItem('userlog');
        this.userid=JSON.parse(this.user)
    console.log(this.userid[0].id);
this.u_Id=this.userid[0].id;
}

deleteProduct(productId:any)
{
  this.productservice.deleteProduct(productId,this.u_Id).subscribe((data)=>{
    console.log(data);
})
}



}
