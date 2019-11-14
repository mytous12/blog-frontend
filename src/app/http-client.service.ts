import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http: HttpClient) {
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

  getSubscriptions() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/subscriber/subscription', {headers});
  }

  searchByCategory(query: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/get-by-category?category=' + query, {headers});
  }

  viewPost(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/view?id=' + id, {headers});
  }

  searchByTitle(query: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/get-by-title?title=' + query, {headers});
  }

  searchByDescription(query: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/get-by-description?desc=' + query, {headers});
  }

  searchByAuthor(query: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/get-by-author-name?name=' + query, {headers});
  }

  getUserById(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/user/get-by-id?id=' + id, {headers});
  }

  getPostsByAuthor(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/get-by-author?id=' + id, {headers});
  }
}
