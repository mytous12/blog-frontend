import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  private posts;
  popularPosts: any;
  private isAdmin;

  constructor(private service: HttpClientService, private router: Router, private appService: AppService) {
  }

  ngOnInit() {
    this.isAdmin = this.appService.checkAdmin();
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

  delete(id: any) {
    this.service.deleteById(id).subscribe((data) => {
      this.posts = data;
    });
  }
}
