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

    public getSubscriptions(): Observable<any>{
      this.baseUrl=this.environmentService.environment.AssistAPI_URL;
      //console.log(this.id);
      const url=`${this.baseUrl}/api/v1/users/1/subscriptions`;      //remove userid later
      return this.httpClient.get(url);
    }

  
}
