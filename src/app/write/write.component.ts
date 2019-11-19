import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  title: any;
  description: any;
  image: any;
  category: any;
  isPrivate = false;
  privateValue = 0;
  content: any;
  isSuccessful = false;

  constructor(private service: HttpClientService, private router: Router) {
  }

  ngOnInit() {
    this.category = '';
  }

  publish() {
    if (this.category === undefined || this.category === '' ||
      this.title === undefined || this.title === '' ||
      this.description === undefined || this.description === '' ||
      this.isPrivate === undefined ||
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
      this.service.publish({
        title: this.title,
        description: this.description,
        image: this.image,
        category: this.category,
        isPrivate: this.privateValue,
        content: this.content
      }).subscribe((data) => {
        this.title = undefined;
        this.description = undefined;
        this.image = undefined;
        this.category = undefined;
        this.privateValue = undefined;
        this.content = undefined;
        this.router.navigate(['news-feed']);
      });
    }
  }
}
