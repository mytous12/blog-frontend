import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {error} from 'util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private name;
  private email;
  private password;
  private exists = false;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUp({
      email: this.email,
      password: this.password,
      name: this.name
    }).subscribe(
      (data) => {
        if (data === false) {
          this.exists = true;
          this.password = undefined;
          this.email = undefined;
        } else {
          this.router.navigate(['login']);
        }
      });
  }

  home() {
    this.router.navigate(['home']);
  }
}
