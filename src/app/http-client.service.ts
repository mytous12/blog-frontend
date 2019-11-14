import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
    this.keyword = keyword;
    this.eventEmitter.emit(keyword);
  }

  getName() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/user/name', {headers});
  }


  publish(post) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/post/add', post, {headers});
  }

  getPosts() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/get-all', {headers});
  }

  getMyPosts() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/get', {headers});
  }

  getPostById(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/get-by-id?id=' + id, {headers});
  }

  addComment(id, content) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/comment/create-comment?id=' + id, content, {headers});
  }

  getComments(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/comment/view-comments?id=' + id, {headers});
  }

  subscribe(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/subscriber/subscribe?id=' + id, null, {headers});
  }

  isSubscribed(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/subscriber/subscribed?id=' + id, {headers});
  }

  getProfile() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/user/profile', {headers});
  }

  unsubscribe(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/subscriber/unsubscribe?id=' + id, null, {headers});
  }

  updateProfile(user) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.put('http://localhost:8082/user/update-profile', user, {headers});
  }

  delete(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/post/delete?id=' + id, null, {headers});
  }

  getMyGroups() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/groups/get', {headers});
  }

  getSubscribers() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/subscriber/get-subscribers', {headers});
  }
}
