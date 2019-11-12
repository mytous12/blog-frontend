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

  constructor(private router: Router, private authService: AuthenticationService, private httpService: HttpClientService,
              private service: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.keyword = localStorage.getItem('keyword');
  }

  signOut() {
    this.authService.signOut().subscribe(data => {
      this.service.loggingOut();
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      localStorage.removeItem('category');
      localStorage.removeItem('edit');
      localStorage.removeItem('path');
      localStorage.removeItem('keyword');
      this.router.navigate(['home']);
    });
  }

  orders() {
    if (!this.service.checkLogin()) {
      localStorage.setItem('path', '/order-history');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/order-history']);

    }
  }

  cart() {
    if (!this.service.checkLogin()) {
      localStorage.setItem('path', '/cart');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/cart']);

    }
  }

  navigate() {
    this.service.edit(false);
    this.router.navigate(['add-product']);
  }

  navigateToUsers() {
    this.router.navigate(['users']);
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

  profile() {
    this.router.navigate(['profile']);
  }

  login() {
    this.router.navigate(['login']);
  }

  home() {
    this.router.navigate(['home']);
  }
}
