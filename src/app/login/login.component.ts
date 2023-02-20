import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication-service.service';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent{
  username = '';
  password = '';

  constructor(private authService: AuthenticationService) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(response => {
      console.log('Authentication success!');
    }, error => {
      console.error('Authentication failed!');
    });
  }
}
