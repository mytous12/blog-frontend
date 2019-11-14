import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit() {
    if (this.appService.checkLogin()) {
      this.router.navigate(['news-feed']);
    }
  }

}
