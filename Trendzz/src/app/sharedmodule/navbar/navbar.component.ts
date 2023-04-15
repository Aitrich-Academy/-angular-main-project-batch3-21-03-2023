import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/class/loginData';
import { signinData } from 'src/app/class/signinData';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data : LoginData = {
    email : '',
    password: ''
  }
  email : string = '';
  password : string = '';


    name : string = '';
    gmail : string = '';
    gpassword: string = ''


  constructor(private route : Router, public dialog: MatDialog){}

  ngOnInit(): void {
      
  }

  Login(){
    if(this.email === "user@gmail.com" && this.password === "user"){
      this.route.navigate(['/profile']);
    }

  }

  signUp(){
    console.log("Sign Up works")
  }
  

  openDialog() {
    this.dialog.open(ModalComponent);
   
  }

  openModal(){
    this.dialog.open(SignUpComponent);

  }


}
