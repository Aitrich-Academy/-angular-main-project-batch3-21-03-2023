import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import{signinData} from '../class/signinData';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  public apiUrl = 'http://localhost:3000/user_cred';
  constructor(private http: HttpClient) {}


  adduserCred(data:signinData): Observable<any>{
    return this.http.post<signinData>(`${this.apiUrl}`,data);
   
    }
}
