import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name : string = '';
    gmail : string = '';
    gpassword: string = ''

    constructor(){}

    ngOnInit(): void {
        
    }

    signUp(){
      console.log("Sign Up works")
    }
    

}
