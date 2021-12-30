import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from './app.config.service';

@Injectable({
  providedIn: 'root'
})
export class PlansService{

  private baseUrl;
  constructor(private environmentService: AppConfigService ,
    private httpClient: HttpClient) { 

      this.baseUrl=this.environmentService.environment.AssistAPI_URL;

    }

    public planDetails(name:string){
    
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

    public getPlans(): Observable<any>{
      this.baseUrl=this.environmentService.environment.AssistAPI_URL;
      const id = this.planDetails('planId');
      console.log(id);
      const url=`${this.baseUrl}/api/v1/retailers/${id}/plans`;     
      return this.httpClient.get(url);
    }
}

