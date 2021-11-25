import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { LoginMobileComponent } from './login-mobile/login-mobile.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { ApplicationPaths } from './api-authorization.constants';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(
      [
        { path: ApplicationPaths.Register, component: LoginMobileComponent },
        { path: ApplicationPaths.Profile, component: LoginMobileComponent },
        { path: ApplicationPaths.Login, component: LoginMobileComponent },
        { path: ApplicationPaths.LoginFailed, component: LoginMobileComponent },
        { path: ApplicationPaths.LoginCallback, component: LoginMobileComponent },
        { path: ApplicationPaths.LogOut, component: LogoutComponent },
        { path: ApplicationPaths.LoggedOut, component: LogoutComponent },
        { path: ApplicationPaths.LogOutCallback, component: LogoutComponent }
      ]
    )
  ],
  declarations: [LoginMenuComponent, LoginMobileComponent, LogoutComponent, LoginMobileComponent],
  exports: [LoginMenuComponent, LoginMobileComponent, LogoutComponent]
})
export class ApiAuthorizationModule { }
