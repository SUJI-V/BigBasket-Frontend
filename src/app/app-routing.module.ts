import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlansComponent } from './components/plans/plans.component';
import { PublicPageComponent } from './components/public-page/public-page.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './services/RouteGuard/auth.guard';

const routes: Routes = [
  {path: 'login-user', component: UserLoginComponent},
  {path: '', component: HomeComponent},
  {path: '#', component: HomeComponent},
  {path: 'user-signup', component: UserSignupComponent},
  {path: 'retailerslist', component: PublicPageComponent},
  {path: 'userslist', component: UsersComponent},
  {path: 'plans', component: PlansComponent},
  {path: 'user-subscription', component: SubscriptionsComponent,canActivate:[AuthGuard]},
  {path: 'user-homePage', component: UserHomeComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
