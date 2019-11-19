import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  private posts;
  popularPosts: any;

  constructor(private service: HttpClientService, private router: Router) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe((data) => {
      this.posts = data;
    });
    this.service.getPopularPosts().subscribe(data => {
      this.popularPosts = data;
    });
  }

  navigate(id: any) {
    this.service.viewPost(id).subscribe((data) => {
    });
    this.router.navigate(['post', id]);
  }

  navigateToProfile(id: any) {
    this.router.navigate(['profile', id]);
  }
}
