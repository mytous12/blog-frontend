import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  members: any;
  posts: any;
  private id;
  private group;
  private subscribers;
  // tslint:disable-next-line:ban-types
  private isOwner: Object = false;

  constructor(private service: HttpClientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.service.isOwner(this.id).subscribe((data) => {
      this.isOwner = data;
    });
    this.service.getSubscribers().subscribe((data) => {
      this.subscribers = data;
    });
    this.service.getMembers(this.id).subscribe((data) => {
      this.members = data;
    });
    this.service.groupById(this.id).subscribe((data) => {
      this.group = data;
    });
    this.service.privatePosts(this.id).subscribe((data) => {
      this.posts = data;
    });
  }

  navigate(id: any) {
    this.router.navigate(['profile', id]);
  }

  remove(memberId: any) {
    if (this.isOwner) {
      this.deleteGroup();
    } else {
      this.service.remove(this.id, memberId).subscribe((data) => {
        this.members = data;
      });
    }
  }

  add(memberId: any) {
    this.service.isMember(this.id, memberId).subscribe((data) => {
      if (data === true) {
        alert('Member already in group');
      } else {
        this.service.add(this.id, memberId).subscribe((data1) => {
          this.members = data1;
        });
      }
    });
  }

  deleteGroup() {
    this.service.deleteGroup(this.id).subscribe((data) => {
      this.router.navigate(['my-groups']);
    });
  }

  leaveGroup() {
    this.service.leaveGroup(this.id).subscribe((data) => {
      this.router.navigate(['my-groups']);
    });
  }

  navigateToPost(id: any) {
    this.router.navigate(['post', id]);
  }
}
