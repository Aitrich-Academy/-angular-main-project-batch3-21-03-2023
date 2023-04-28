import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cardData, orderhistory } from '../userlanding/data';
import { ProductInfoService } from 'src/app/services/product-info.service';
import { signinData } from 'src/app/class/signinData';

@Component({
  selector: 'app-ordershipping',
  templateUrl: './ordershipping.component.html',
  styleUrls: ['./ordershipping.component.css']
})
export class OrdershippingComponent implements OnInit{

prodata:cardData | undefined;

user:any;
userid:any;
pro_id:any;
u_Id:any;

  constructor(private activateroute:ActivatedRoute,private proservice:ProductInfoService)
  {

  }



  ngOnInit(): void {
    this.pro_id=this.activateroute.snapshot.paramMap.get('idpro');
    console.log(this.pro_id);

   this.user=localStorage.getItem('userlog');
        this.userid=JSON.parse(this.user)
    console.log(this.userid[0].id);
this.u_Id=this.userid[0].id;

   this. pro_id && this.proservice.getProduct(this.pro_id).subscribe((data)=>{
      
      this.prodata=data;
      console.log(this.prodata)
    })
  }


  productOrdered(p_id:any)
  {
    let userrId=this.userid[0].id;
   
    
    let ohdata={
      userId:userrId ,
      productId:p_id,
      ...this.prodata,
     
      }
      delete ohdata.id;
      console.log(ohdata);
 this.proservice.addOrderHistory(ohdata).subscribe((res)=>
 {
  console.log(res)
 })


  }

}
