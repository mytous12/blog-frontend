import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss']
})
export class MyGroupsComponent implements OnInit {

  private groups;
  private subscribers;

  constructor(private service: HttpClientService) {
  }

  ngOnInit() {
    this.service.getMyGroups().subscribe((data) => {
      this.groups = data;
    });
    this.service.getSubscribers().subscribe((data) => {
      this.subscribers = data;
    });
  }

}
