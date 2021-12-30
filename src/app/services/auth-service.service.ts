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

   signUp(data: any): Observable<any>
   {
     console.log("from signUpProcess"+ data);
     
     this.baseUrl = this.environmentService.environment.AssistAPI_URL;
     
     const url = `${this.baseUrl}/api/v1/users`
     
     return this.http.post(url,data);
   }


  login(data: any): Observable<any>
  {
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    
    const url = `${this.baseUrl}/api/v1/tokens/user`
    
    return this.http.post(url,data,{responseType:'text'});
  }

  public getUserProfile(): Observable<any>
  {
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/users/current`
    return this.http.get(url);
  }

  loggedIn(): boolean{
    return !!document.cookie;
  }
  
  logoutUser(): void{
    this.delete_cookie('token');
    this.delete_cookie('userId');
    alert("Logged Out");
    this._router.navigate(['/login-user']);
  }
  delete_cookie(name:any): void {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
  
}
