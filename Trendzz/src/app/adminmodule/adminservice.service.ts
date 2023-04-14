import { Injectable, OnInit } from '@angular/core';
import { Items } from './modals/items';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { ItemsCategory } from './adminlanding/itemsmodal';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService  {


 public myItems :Items[]= [
    {image: 'assets/images/image 12.png', description: 'Skin Care' },
    { image: 'assets/images/image 12-1.png', description: 'Laptop & PC ' },
    { image: 'assets/images/image 12-5.png', description: 'SmartPhones' },
    { image: 'assets/images/image 12-2.png', description: 'Fashion' },
    { image: 'assets/images/image 12-3.png', description: 'Electronics' },
    { image: 'assets/images/image 12-4.png', description: 'Sepatu ' },
  ];
  getItems(){
    return this.myItems;
  }

  
  public apiUrl = 'http://localhost:3000/categories';
  constructor(private http: HttpClient) {}

  getData(page: number, itemsPerPage: number): Observable<any> {
    const startIndex = (page - 1) * itemsPerPage;
    return this.http.get(`${this.apiUrl}?_start=${startIndex}&_limit=${itemsPerPage}`);
  }


  addData(data:ItemsCategory): Observable<any>{
    return this.http.post<ItemsCategory>(`${this.apiUrl}`,data);
   
    }

//  updateData(data:any,id:number){
//   return this.http.put('${this.apiUrl}/products' +id ,data).pipe(map((res:any)=>
//   {
//     return res;
//   }))
// }

deleteData(id:ItemsCategory): Observable<any>{
  return this.http.delete(`${this.apiUrl}/`+id );
 
}
}

 
  


  




