import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  helper = new JwtHelperService();
  decodedToken: any;
  formGroup: FormGroup | any;
  userid: any;
  constructor(
    private authService: AuthServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginProcess() {
    if (this.formGroup?.valid) {
      this.authService.login(this.formGroup.value).subscribe((result) => {
        if (result != null) {
          console.log(result);
          document.cookie = `token=${result}`;

          this._router.navigate(['/user-subscription']);
        } else {
          alert('Invalid username or password');
        }
      });
    }
  }
  private getLoggedUserId(){
    this.authService.loggedUserId().subscribe(result=>{
      return this.userid=result;
    })
  }
}
