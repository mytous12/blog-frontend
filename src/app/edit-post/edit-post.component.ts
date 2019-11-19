import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  title: any;
  description: any;
  image: any;
  category: any;
  isPrivate: any;
  content: any;
  id;
  privateValue;
  private post;

  constructor(private service: HttpClientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.service.getPostById(this.id).subscribe((data) => {
      this.post = data;
      this.title = this.post.title;
      this.description = this.post.description;
      this.image = this.post.image;
      this.category = this.post.category;
      if (this.post.isPrivate === 1) {
        this.isPrivate = true;
      } else if (this.post.isPrivate === 0) {
        this.isPrivate = false;
      }
      this.content = this.post.content;
    });

  }

  publish() {
    if (this.category === undefined || this.category === '' ||
      this.title === undefined || this.title === '' ||
      this.description === undefined || this.description === '' ||
      this.isPrivate === undefined || this.isPrivate === '' ||
      this.image === undefined || this.image === '' ||
      this.content === undefined || this.content === ''
    ) {
      alert('all fields are required');
    } else {
      if (this.isPrivate === false) {
        this.privateValue = 0;
      } else {
        this.privateValue = 1;
      }
      this.service.editPost(this.id, {
        title: this.title,
        description: this.description,
        image: this.image,
        category: this.category,
        isPrivate: this.privateValue,
        content: this.content
      }).subscribe((data) => {
        alert('edited successfully');
        this.router.navigate(['my-posts']);
      }, error => {
        console.log(error.message);
      });
    }
  }
}
