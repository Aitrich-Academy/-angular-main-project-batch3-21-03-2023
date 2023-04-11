import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { HttpClient } from '@angular/common/http';

import { ItemsCategory } from '../adminlanding/itemsmodal';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  constructor(private router: Router,private activatedroute: ActivatedRoute,public elements:AdminserviceService){
  
  }
  
  
public cateid!:ItemsCategory;
public data!:ItemsCategory;
  ngOnInit():void
{
this.activatedroute.paramMap.subscribe((param:Params)=>{
this.cateid=param ['get']("id");
console.log(this.cateid);
})
 this.elements.fetchdata(this.cateid).subscribe((res:ItemsCategory)=>{
  this.data=res;
  console.log(this.data);
})
}
updateItem(){
  this.elements.updateData(this.data,this.cateid).subscribe((res:any)=>{
    this.router.navigate(["/admincategory"]);

  })
}


/*UPLOAD IMAGE FUNCTION */

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

}
