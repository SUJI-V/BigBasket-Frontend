import { Component, OnInit } from '@angular/core';
import { PlansService } from 'src/app/services/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans: any;

  constructor(private _planService:PlansService) { }

  ngOnInit(): void {
    this.getPlansList();
  }
  private getPlansList(): void{
    this._planService.getPlans().subscribe(result=>{
        this.plans=result;
      }
    );
  }
}
