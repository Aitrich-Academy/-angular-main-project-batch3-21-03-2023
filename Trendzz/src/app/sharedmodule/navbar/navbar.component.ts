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

loginpassword:any;
loginError:any='';




  constructor(private route : Router,private userservice:UserserviceService,private http: HttpClient, private dialog: MatDialog ){}


  ngOnInit(): void {
      
  }

  Login(login:LoginData){
    if(this.email === "admin@gmail.com" && this.loginpassword === "admin"){
      this.route.navigate(['/admin']);
      
    }
    else 
    {
      console.log(login);
      this.userservice.loginCred(login);
      this.userservice.isLoginFailed.subscribe((err)=>
      {
        if(err){
      this.loginError='Loggin failed! Please write correct Email and Password';
        }
      })
    }
  }

  signUp(data:signinData){
    console.log("Sign Up works");
    console.log(data);
this.userservice.adduserCred(data)
  }
  

  openDialog() {
    this.dialog.open(ModalComponent);
   
  }

  openModal(){
    this.dialog.open(SignUpComponent);

  }


}
