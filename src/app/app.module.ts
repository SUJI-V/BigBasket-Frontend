import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppConfigService } from 'src/app/services/app.config.service';
import { UserService } from './services/users.service';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { PlansComponent } from './components/plans/plans.component';
import { AuthGuard } from './services/RouteGuard/auth.guard';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';

const providers = [
  AppConfigService,
  UserService,
  AuthGuard
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    NavbarComponent,
    UserSignupComponent,
    UsersComponent,
    PlansComponent,
    SubscriptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppConfig,
      deps: [AppConfigService],
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function initAppConfig(appConfig: AppConfigService) {
  return () => appConfig.loadConfiguration();
}
