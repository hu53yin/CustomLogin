import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../../app/shared/models/login';
import { CustomClient } from '../../app/shared/services/custom.service';

@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrls: ['./login-mobile.component.css']
})
export class LoginMobileComponent implements OnInit {

  constructor(
    private client: CustomClient,
    private router: Router
  ) { }

  async ngOnInit() {
    var login: LoginRequest = { username: "username" }
    var result = await this.client.login(login).toPromise();

    if (result) {
      this.router.navigate(['/']);
    }
  }
}
