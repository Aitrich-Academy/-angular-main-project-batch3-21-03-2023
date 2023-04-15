import { Component ,OnInit} from '@angular/core';
import { Items } from '../modals/items';
import { AdminserviceService } from '../adminservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class  AdminordersComponent{
 
 items:Items[]=[

  ]
  constructor(public elements:AdminserviceService,private http: HttpClient){
  
  }


  ngOnInit()
{

 this.loadData(this.currentPage);


}
data: any[] = [];
  totalItems:number = 0;
  currentPage:number= 1;
  itemsPerPage:number = 3;


  
  loadData(page: number) {
    this.elements.getData(page, this.itemsPerPage).subscribe((response: any) => {
      this.data = response;
      this.totalItems = response.length;
    });
  }

 /* onPageChange(page: number) {
    this.currentPage = page;
    this.loadData(page);
  } */

  nextPage() {
    if(this.currentPage>=1|| this.currentPage!=10){
    this.currentPage++;
    this.loadData(this.currentPage);
  }else{
    this.loadData(this.currentPage);
  }
}
  
  prevPage() {
    if(this.currentPage>=10 || this.currentPage!=1){
    this.currentPage--;
    this.loadData(this.currentPage);
  }else{
    this.loadData(this.currentPage);
  }
}
}

// getData() {
//   this.dataService.getData(this.currentPage, this.itemsPerPage)
//     .subscribe((data: any[]) => {
//       this.data = data;
//       this.totalItems = data.length;
//     });
// }

// onPageChange(event: any) {
//   this.currentPage = event;
//   this.getData();
// }

// }



