import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfoService } from 'src/app/services/product-info.service';
import { cardData } from '../userlanding/data';

@Component({
  selector: 'app-productplaceorder',
  templateUrl: './productplaceorder.component.html',
  styleUrls: ['./productplaceorder.component.css']
})
export class ProductplaceorderComponent implements OnInit {
  productData:cardData | undefined


  constructor(private activateRoute:ActivatedRoute,private productservice:ProductInfoService,private route:Router)
  {}


ngOnInit(): void {
  let productId=this.activateRoute.snapshot.paramMap.get('id');
  console.log(productId);
 productId && this.productservice.getProduct(productId).subscribe((data)=>{
    console.log(data);
    this.productData=data;
  })
}
userLoggedCheck(proid:any)
  {
    if(localStorage.getItem('userlog'))
    {
      
      this.route.navigate(['/ordership', proid])
    }
    else{
      this.route.navigate(['/home'])
    }

  }


}