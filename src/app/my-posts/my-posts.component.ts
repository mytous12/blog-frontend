import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  private posts;

  constructor(private service: HttpClientService, private router: Router) {
  }

  ngOnInit() {
    this.service.getMyPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  navigate(id: any) {
    this.router.navigate(['post', id]);
  }

  delete(id: any) {
    this.service.delete(id).subscribe((data) => {
      this.posts = data;
    });
  }
}
