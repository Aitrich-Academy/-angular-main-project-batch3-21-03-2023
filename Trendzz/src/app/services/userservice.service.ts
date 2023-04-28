import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable,map } from 'rxjs';
import{signinData} from '../class/signinData';
import { LoginData } from '../class/loginData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  public apiUrl = 'http://localhost:3000/user_cred';
  constructor(private http: HttpClient,private router:Router) {}
isUserLoggedIn = new BehaviorSubject(false);
isLoginFailed= new EventEmitter<boolean>(false);

  adduserCred(data:signinData){
    this.http.post<signinData>(`${this.apiUrl}`,data,{observe:'response'})
   .subscribe((result)=>{console.log(result)
    this.isUserLoggedIn.next(true);
  });
    
   return false;
    }

getuserdata(id:any)
{
  return this.http.get<signinData>(`${this.apiUrl}/${id}`)
}





    loginCred(_data:LoginData)
    {
      this.http.get<signinData>(`${this.apiUrl}?gmail=${_data.email}&password=${_data.password}`,
      {observe:'response'})
      .subscribe((_result:any)=>
      {
        console.log(_result);
        if(_result && _result.body && _result.body.length)
        {
          console.log("logged in")
          localStorage.setItem('userlog',JSON.stringify(_result.body))
          this.router.navigate(['home'])
        }
        else{
          console.log("loggedin failed");
          this.isLoginFailed.emit(true);

        }
        
      })
    }
}
