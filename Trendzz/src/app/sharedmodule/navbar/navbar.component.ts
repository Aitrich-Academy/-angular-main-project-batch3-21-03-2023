import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/class/loginData';
import { signinData } from 'src/app/class/signinData';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component
({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  data : LoginData = {
    email : '',
    password: ''
  }

  // data : LoginData = {
  //   email : '',
  //   password: ''
  // }
 
  email : string = '';
  password : string = '';
    name : string = '';
    gmail : string = '';
    gpassword: string = '';







  constructor(private route : Router,private userservice:UserserviceService,private http: HttpClient, public dialog: MatDialog ){}


  ngOnInit(): void {
      
  }

  Login(){
    if(this.email === "admin@gmail.com" && this.password === "admin"){
      this.route.navigate(['/admin']);
    }

  }

  signUp(data:signinData){
    console.log("Sign Up works");
    console.log(data);
this.userservice.adduserCred(data).subscribe((res)=>{
console.log(res);
 })
  }
  

  openDialog() {
    this.dialog.open(ModalComponent);
   
  }

  openModal(){
    this.dialog.open(SignUpComponent);

  }


}
