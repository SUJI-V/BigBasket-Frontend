import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any;
  constructor(public _userService: UserService) {
    
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void{
    this._userService.getUsers().subscribe(result=>{
        this.users=result;
      }
    );
  }
}
