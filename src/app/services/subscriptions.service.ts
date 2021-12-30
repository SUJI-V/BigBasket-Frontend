import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/services/app.config.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  private baseUrl;
  constructor(private environmentService: AppConfigService ,
    private httpClient: HttpClient) { 

      this.baseUrl=this.environmentService.environment.AssistAPI_URL;

    }

    public userdetails(name:string){
    
      var dc = document.cookie;  
      var prefix = name +"=";  
      var begin = dc.indexOf("; " + prefix);  
      if (begin == -1) {  
          begin = dc.indexOf(prefix);  
          if (begin != 0)return null;  
      } else {  
          begin += 2;  
      }  
      var end = document.cookie.indexOf(";", begin);  
      if (end == -1) {  
          end = dc.length;  
      }  
      return unescape(dc.substring(begin + prefix.length, end));
  
    }

    public getSubscriptions(): Observable<any>{
      this.baseUrl=this.environmentService.environment.AssistAPI_URL;
      const id = this.userdetails('userId');
      console.log(id);
      const url=`${this.baseUrl}/api/v1/users/${id}/subscriptions`;     
      return this.httpClient.get(url);
    }
}
