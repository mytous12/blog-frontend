import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {AppService} from '../app.service';
import {HttpClientService} from '../http-client.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  private keyword;
  private name;

  constructor(private router: Router, private authService: AuthenticationService, private httpService: HttpClientService,
              private service: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.keyword = localStorage.getItem('keyword');
    if (this.service.checkLogin()) {
      this.httpService.getName().subscribe((data) => {
        this.name = data;
        localStorage.setItem('name', this.name);
      });
    }
  }

  signOut() {
    this.authService.signOut().subscribe(data => {
      this.service.loggingOut();
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('admin');
      localStorage.removeItem('category');
      localStorage.removeItem('edit');
      localStorage.removeItem('path');
      localStorage.removeItem('keyword');
      this.router.navigate(['home']);
    });
  }

  startSearch() {
    localStorage.setItem('keyword', this.keyword);
    this.httpService.raiseKeyword(this.keyword);
    this.router.navigate(['product-list/search'], {
      queryParams: {
        q: this.keyword
      }
    });
  }

  login() {
    this.router.navigate(['login']);
  }

  home() {
    this.router.navigate(['home']);
  }

  signUp() {
    this.router.navigate(['sign-up']);
  }

  write() {
    this.router.navigate(['write']);
  }

  navigate() {
    if (this.service.checkLogin()) {
      this.router.navigate(['news-feed']);
    } else {
      this.home();
    }
  }

  myProfile() {
    this.router.navigate(['my-profile']);
  }

  myPosts() {
    this.router.navigate(['my-posts']);
  }
}
