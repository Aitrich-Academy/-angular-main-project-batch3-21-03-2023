import { Injectable } from '@angular/core';



import { cardData } from '../class/datauser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable,map } from 'rxjs';
import { orderhistory } from '../usermodule/userlanding/data';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  public apiproUrl = 'http://localhost:3000/userProduct';
  public apiohUrl = 'http://localhost:3000/ordered_products';
  constructor(private http: HttpClient,private router:Router) {}

  productInfo(): Observable<any> {
    return this.http.get<cardData>(`${this.apiproUrl}`);


  }

  getProduct(id:string)
  {
return this.http.get<cardData>(`${this.apiproUrl}/${id}`)
  }

addOrderHistory(data:orderhistory)
{
  return this.http.post<orderhistory>(`${this.apiohUrl}`,data)
}


getOrderHistory(u_id:any)
{
  return this.http.get<orderhistory>(`${this.apiohUrl}`,u_id)
}

deleteProduct(id:any,u_Id:any)
{
  return this.http.delete<orderhistory>(`${this.apiohUrl}?productId=${id}&userId=${u_Id}`)
}
}
