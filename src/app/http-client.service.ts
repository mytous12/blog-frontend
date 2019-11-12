import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private keyword: string;
  eventEmitter: EventEmitter<string>;

  constructor(private http: HttpClient) {
    this.eventEmitter = new EventEmitter<string>();
  }

  raiseKeyword(keyword: string): void {
    // localStorage.setItem('category', category);
    this.keyword = keyword;
    this.eventEmitter.emit(keyword);
  }
}
