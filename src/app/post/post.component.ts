import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private id;
  private post;
  private content: any;
  private comments;
  private isSubscribed;
  private user;


  constructor(private service: HttpClientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.service.getPostById(this.id).subscribe((data) => {
      this.post = data;
      this.service.isSubscribed(this.post.author.id).subscribe((data1) => {
        this.isSubscribed = data1;
      });
    });
    this.service.getComments(this.id).subscribe(data => {
      this.comments = data;
    });
    this.service.getProfile().subscribe((data) => {
      this.user = data;
    });
  }

  addComment() {
    this.service.addComment(this.id, {
      content: this.content
    }).subscribe((data) => {
      this.comments = data;
      this.content = undefined;
    });
  }

  subscribe(id: any) {
    this.service.subscribe(id).subscribe((data) => {
      this.service.isSubscribed(id).subscribe((data1) => {
        this.isSubscribed = data1;
      });
    });
  }

  unsubscribe(id: any) {
    this.service.unsubscribe(id).subscribe((data) => {
      this.service.isSubscribed(id).subscribe((data1) => {
        this.isSubscribed = data1;
      });
    });
  }
}
