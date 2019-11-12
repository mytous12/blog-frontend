import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppService} from './app.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private appService: AppService) {
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8082/user/login', {headers}).pipe(
      map(data => {
          this.appService.isAdmin(data);
          localStorage.setItem('token', btoa(username + ':' + password));
        }
      ));
  }

  signOut() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8082/user/logout', {headers});
  }

  signUp(user) {
    return this.http.post('http://localhost:8082/user/sign-up', user);
  }
}
