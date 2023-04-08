import { Component ,OnInit} from '@angular/core';
import { Items } from '../modals/items';
import { AdminserviceService } from '../adminservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup,FormBuilder } from  '@angular/forms'
import { ItemsCategory } from './itemsmodal';


@Component({
  selector: 'app-adminlanding',
  templateUrl: './adminlanding.component.html',
  styleUrls: ['./adminlanding.component.css']
})
export class AdminlandingComponent implements OnInit  {
 
 items:Items[]=[

  ]
    // forms validation
   
 
  constructor(public elements:AdminserviceService,private http: HttpClient,private fb:FormBuilder){
    this.elements.getItems
  }

  formValue!:FormGroup;
  categoryobj:ItemsCategory=new ItemsCategory();


  ngOnInit():void
{

  this.loadData(this.currentPage);
  
  this.formValue = this.fb.group<any>
  ({
    categoryname:[''],
    categorydiscription:[''],
    categoryimage:['']
  })
 

}
imageSrc:any="";
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imageSrc = e.target.result;
      this.imageSrc = imageSrc; // bind the data URL to a property
    };
    reader.readAsDataURL(file);
  }

  onFileSelection(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imageSrc = e.target.result;
      this.imageSrc = imageSrc; // bind the data URL to a property
    };
    reader.readAsDataURL(file);
  }
 

  data: any[] = [];
  totalItems:number = 0;
  currentPage:number= 1;
  itemsPerPage:number = 6;


  
  loadData(page: number) {
    this.elements.getData(page, this.itemsPerPage).subscribe((response: any) => {
      this.data = response;
      this.totalItems = response.length;
    });
  }


  addItems(data:ItemsCategory){
    // this.categoryobj.categoryname=this.formValue.value.categoryname;
    // this.categoryobj. categorydiscription=this.formValue.value. categorydiscription;
    // this.categoryobj.categoryimage=this.formValue.value.categoryimage;
    // console.log(this.categoryobj);
    this.elements.addData(data).subscribe((response: any) => {
 this.formValue.reset();
    })
    this.loadData(this.currentPage);
    }
  

 /* onPageChange(page: number) {
    this.currentPage = page;
    this.loadData(page);
  } */

  nextPage() {
    if(this.currentPage>=0|| this.currentPage!=10){
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












  

