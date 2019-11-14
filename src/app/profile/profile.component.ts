import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private id;
  private user;
  private posts;

  constructor(private service: HttpClientService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.service.getUserById(this.id).subscribe((data) => {
      this.user = data;
    });
    this.service.getPostsByAuthor(this.id).subscribe((data) => {
      this.posts = data;
    });
  }

  navigate(id: any) {
    this.service.viewPost(id).subscribe((data) => {
    });
    this.router.navigate(['post', id]);
  }
}
