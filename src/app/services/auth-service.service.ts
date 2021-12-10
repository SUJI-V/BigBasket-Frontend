import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from './app.config.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  private baseUrl;
  constructor(private http: HttpClient,private environmentService : AppConfigService, private _router: Router) {
    this.baseUrl = this.environmentService.environment.AssistAPI_URL
   }

   signUp(data: any): Observable<any> //complete
   {
     console.log("from signUpProcess"+ data);
     
     this.baseUrl = this.environmentService.environment.AssistAPI_URL;
     
     const url = `${this.baseUrl}/api/v1/users`
     
     return this.http.post(url,data);
   }


  login(data: any): Observable<any>
  {
    console.log("from login process auth-service "+ data);
    
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    
    const url = `${this.baseUrl}/api/v1/tokens/user`
    
    return this.http.post(url,data,{responseType:'text'});
  }

  loggedUserId():  Observable<any>
  {
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/users/loggeduserid`;
    return this.http.get<any>(url);
  }

  loggedIn(){
    //return !!localStorage.getItems('token')
    return !!document.cookie;
  }
  
  logoutUser(){
    document.cookie;
    console.log(document.cookie);
    this._router.navigate(['/login-user']);
  }
 
  
}
