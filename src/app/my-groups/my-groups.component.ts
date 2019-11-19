import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss']
})
export class MyGroupsComponent implements OnInit {

  private groups;
  private subscribers;
  name: any;

  constructor(private service: HttpClientService, private router: Router) {
  }

  ngOnInit() {
    this.service.getMyGroups().subscribe((data) => {
      this.groups = data;
    });
    this.service.getSubscribers().subscribe((data) => {
      this.subscribers = data;
    });
  }

  navigate(id: any) {
    this.router.navigate(['group-details', id]);
  }

  create() {
    this.service.createGroup({
      name: this.name
    }).subscribe((data) => {
      this.groups = data;
    });
  }
}
