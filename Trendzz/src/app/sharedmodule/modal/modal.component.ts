import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/class/loginData';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  data : LoginData = {
    email : '',
    password: ''
  }
  email : string = '';
  password : string = '';


    name : string = '';
    gmail : string = '';
    gpassword: string = ''

 
  constructor(public dialog: MatDialog,private route : Router) {}

  
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

}