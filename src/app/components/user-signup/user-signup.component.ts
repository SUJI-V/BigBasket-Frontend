import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  signUpForm: FormGroup | any;
  constructor(
    private authService: AuthServiceService,
    private _router: Router,
    private _fromBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    
    this.signUpForm =this._fromBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      // phoneNumber:[''],
      // address:['']
    })
    
  }
 
  signUpProcess() {
    debugger;
    if (this.signUpForm?.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe((result) => {
        if(result == 0)
        {
          alert("user already exist");
        } 
        else if (result != null) {
          alert("New User Registered");
          this._router.navigate(['/login-user']);
        } else {
          alert('Registration Not Completed! Try Again');
        }
      });
    }
  }

}

// signUpProcess(){
//   debugger;
// this.http.post<any>("https://localhost:44385/api/v1/users",this.signUpForm.value)
// .subscribe(res =>{
// alert("signup succesfull");
// this.signUpForm.reset();
// this._router.navigate(['/login-user']);
// },err=>{
// alert("Something Went Wrong");
// })
// }

