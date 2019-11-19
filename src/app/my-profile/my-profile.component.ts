import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  isEditable = false;
  name: any;
  email: any;
  password: any;
  private profile;
  private shortName;
  private subscribers;
  private subscriptions;
  private invalid = false;
  private short = false;

  constructor(private service: HttpClientService, private router: Router) {
  }

  ngOnInit() {
    this.shortName = localStorage.getItem('name');
    this.service.getProfile().subscribe((data) => {
      this.profile = data;
      this.name = this.profile.name;
      this.email = this.profile.email;
      this.password = this.profile.password;
    });
    this.service.getSubscribers().subscribe((data) => {
      this.subscribers = data;
    });
    this.service.getSubscriptions().subscribe((data) => {
      this.subscriptions = data;
    });
  }

  edit() {
    this.isEditable = true;
  }

  update() {
    if (this.email === undefined || this.password === undefined || this.name === undefined ||
      this.email === '' || this.password === '' || this.name === '') {
      this.invalid = true;
    } else if (this.password.length < 6) {
      this.short = true;
    } else {
      this.service.updateProfile({
        name: this.name,
        email: this.email,
        password: this.password
      }).subscribe((data) => {
        localStorage.setItem('token', btoa(this.email + ':' + this.password));
        this.profile = data;
        this.isEditable = false;
      });
    }
  }

  navigate() {
    this.router.navigate(['subscriptions']);
  }
}
