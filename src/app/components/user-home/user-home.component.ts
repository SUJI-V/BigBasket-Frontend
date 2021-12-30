import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
public userDetails: any;
public subscribers: any;
//public id: any;
  constructor(private authService: AuthServiceService,private _subscriptionService:SubscriptionsService) { }

  ngOnInit(): void {
  this.getSubscriptions();
 this.getCurrentUser();
 
  }
private getCurrentUser(): void
{
  this.authService.getUserProfile().subscribe(result=>{
    this.userDetails=result;
    console.log(this.userDetails);
  document.cookie = `userId=${this.userDetails.id}`;
  });
  
}
private getSubscriptions():void{
  this._subscriptionService.getSubscriptions().subscribe(result=>{
    this.subscribers=result;
    console.log(this.subscribers);
  })
}
}
