import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClientService} from '../http-client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private selected = 'Category';

  private searchCategories = [
    {id: 1, value: 'Category', isSelected: true},
    {id: 2, value: 'Title', isSelected: false},
    {id: 3, value: 'Description', isSelected: false},
    {id: 4, value: 'Author', isSelected: false}
  ];

  private query;
  private result;

  constructor(private service: HttpClientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('q');
      this.selected = 'Category';
      this.searchByCategory();
    });
  }

  search(value: string) {
    this.selected = value;
    switch (value.toLowerCase()) {
      case 'category':
        this.searchByCategory();
        break;
      case 'title':
        this.searchByTitle();
        break;
      case 'description':
        this.searchByDescription();
        break;
      case 'author':
        this.searchByAuthor();
        break;
    }
  }

  searchByCategory() {
    this.service.searchByCategory(this.query).subscribe((data) => {
      this.result = data;
    });
  }

  getDetails(id) {
    this.service.viewPost(id).subscribe((data) => {
    });
    this.router.navigate([]).then((result) => {
      window.open('http://localhost:4200/post-details/' + id, '_blank');
    });
  }

  private searchByTitle() {
    this.service.searchByTitle(this.query).subscribe((data) => {
      this.result = data;
    });
  }

  private searchByDescription() {
    this.service.searchByDescription(this.query).subscribe((data) => {
      this.result = data;
    });
  }

  private searchByAuthor() {
    this.service.searchByAuthor(this.query).subscribe((data) => {
      this.result = data;
    });
  }
}
