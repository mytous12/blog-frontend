import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {removeErrorMarkup} from 'tslint/lib/verify/parse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  private posts;

  constructor(private service: HttpClientService, private router: Router) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  navigate(id: any) {
    this.router.navigate(['post', id]);
  }
}
