import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

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
  private fields = false;
  private short = false;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {
    if (this.email === undefined || this.password === undefined || this.name === undefined
      || this.email === '' || this.password === '' || this.name === '') {
      this.fields = true;
    } else if (this.password.length < 6) {
      this.short = true;
    } else {
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
            alert('Successfully Registered');
            this.router.navigate(['login']);
          }
        });
    }
  }

  home() {
    this.router.navigate(['home']);
  }
}
