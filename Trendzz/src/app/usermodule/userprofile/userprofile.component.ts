import { Component, OnInit } from '@angular/core';
import { signinData } from 'src/app/class/signinData';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
user:any;
userid:any;
u_Id:any;
userdata:signinData | undefined;
constructor(private userservice:UserserviceService)
{


}



ngOnInit(): void {
  this.user=localStorage.getItem('userlog');
        this.userid=JSON.parse(this.user)
    console.log(this.userid[0].id);
this.u_Id=this.userid[0].id;

this.userservice.getuserdata(this.u_Id).subscribe((data)=>{
  console.log(data);
  this.userdata=data;
})



}



}
