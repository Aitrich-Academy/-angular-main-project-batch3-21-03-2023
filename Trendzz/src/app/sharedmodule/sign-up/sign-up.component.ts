import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signinData } from 'src/app/class/signinData';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name : any;
    gmail : string = '';
    gpassword: string = ''

    constructor(){}

    ngOnInit(): void {
        
    }

    signUp(data:signinData){
      console.log("Sign Up works")
    }
    

}
