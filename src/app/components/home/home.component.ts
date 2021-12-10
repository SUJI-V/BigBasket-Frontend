import { Component, OnInit } from '@angular/core';
import { RetailersService } from 'src/app/services/retailers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public retailers: any;
  constructor(public _retailerService : RetailersService) { }

  ngOnInit(): void {
   // this.getRetailers();
  }


// private getRetailers(): void{
//   this._retailerService.getRetailers().subscribe(result=>{
//       this.retailers=result;
//     }
//   );
// }
}
