import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  private subscribers;
  private subscriptions;

  constructor(private service: HttpClientService, private router: Router) {
  }

  ngOnInit() {
    this.service.getSubscriptions().subscribe((data) => {
      this.subscriptions = data;
    });
    this.service.getSubscribers().subscribe((data) => {
      this.subscribers = data;
    });
  }

  navigate(id: any) {
    this.router.navigate(['profile', id]);
  }
}
