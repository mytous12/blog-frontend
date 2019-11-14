import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';

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

  constructor(private service: HttpClientService) {
  }

  ngOnInit() {
    this.service.getProfile().subscribe((data) => {
      this.profile = data;
      this.name = this.profile.name;
      this.email = this.profile.email;
      this.password = this.profile.password;
    });
  }

  edit() {
    this.isEditable = true;
  }

  update() {
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
