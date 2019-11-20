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

  getMembers(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/groups/get-members?groupId=' + id, {headers});
  }

  groupById(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/groups/get-by-id?id=' + id, {headers});
  }

  remove(id: any, memberId: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/groups/remove-member?groupId=' + id + '&memberId=' + memberId,
      null, {headers});
  }

  isMember(id: any, memberId: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/groups/is-member?groupId=' + id + '&memberId=' + memberId,
      {headers});
  }

  add(id: any, memberId: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/groups/add-member?groupId=' + id + '&memberId=' + memberId,
      null, {headers});
  }

  getPopularPosts() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/popular', {headers});
  }

  editPost(id, post) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/post/edit?id=' + id, post, {headers});
  }

  deleteGroup(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/groups/delete?id=' + id, null, {headers});
  }

  createGroup(group) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/groups/create', group, {headers});
  }

  isOwner(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/groups/is-owner?groupId=' + id, {headers});
  }

  leaveGroup(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/groups/leave-group?groupId=' + id, null, {headers});
  }

  privatePosts(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/groups/get-posts?groupId=' + id, {headers});
  }

  deleteComment(id: any, commentId: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/comment/delete-comment?postId=' + id + '&commentId=' + commentId,
      null, {headers});
  }

  getLikes(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/get-likes?id=' + id, {headers});
  }

  isLiked(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/post/is-liked?id=' + id, {headers});
  }

  likePost(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/post/like?id=' + id, null, {headers});
  }

  unlike(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/post/unlike?id=' + id, null, {headers});
  }

  deleteAccount() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/user/delete', null, {headers});
  }

  deleteById(id: any) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8082/admin/delete?id=' + id, null, {headers});
  }
}
