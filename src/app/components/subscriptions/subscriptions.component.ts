import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  public subscribers: any;
  constructor(public _subscriptionService: SubscriptionsService) { }

  ngOnInit(): void {
    this.getSubscriptions();
  }
  private getSubscriptions():void{
    this._subscriptionService.getSubscriptions().subscribe(result=>{
      this.subscribers=result;
    })
  }

}
