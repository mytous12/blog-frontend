import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private email;
  private password;
  private invalidLogin = false;
  private fields = false;

  constructor(private router: Router, private service: AppService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
  }

  login() {
    if (this.email === undefined || this.email === '' ||
      this.password === undefined || this.password === '') {
      this.fields = true;
    } else {
      this.authService.authenticate(this.email, this.password).subscribe(
        (data) => {
          this.service.isLoggedIn(true);
          this.invalidLogin = false;
          this.router.navigate(['news-feed']);
        }, (error) => {
          this.invalidLogin = true;
          this.email = undefined;
          this.password = undefined;
        }
      );
    }
  }

  home() {
    this.router.navigate(['home']);
  }
}
