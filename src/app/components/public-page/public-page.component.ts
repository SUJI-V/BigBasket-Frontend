import { Component, OnInit } from '@angular/core';
import { PlansService } from 'src/app/services/plans.service';
import { RetailersService } from 'src/app/services/retailers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css']
})
export class PublicPageComponent implements OnInit {
  retailers: any;
 

  constructor(private _retailersService: RetailersService,  public router: Router) { }

  ngOnInit(): void {
    this.getRetailersList();
   
  }

  private getRetailersList(): void{
    this._retailersService.getRetailers().subscribe(result=>{
        this.retailers=result;
      }
    );
  }
  

}
