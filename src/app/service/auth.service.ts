import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {environment} from '../../environments/environment';


let baseUrl = 'http://localhost:8080/api/user/';
let apiUrl =   'https://valomencebackend.herokuapp.com/api/user/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public currentUser: Observable<User>;

  private currentUserSubject: BehaviorSubject<User>;
  headers: HttpHeaders;

  setHeaders() {
    this.headers = new HttpHeaders({
      authorization: 'Bearer ' + this.currentUserSubject.value.token,
      'Content-Type': 'application/json; charset=UTF-8'
    });
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(model: User): Observable<any> {
    const headers = new HttpHeaders(
      model ? {
        authorization:'Basic ' + btoa(model.username + ':' + model.password)} : {}
    );

    return this.http.get<any> (apiUrl + 'login', {headers:headers}).pipe(
      map(response => {
        if (response){
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  logOut(): Observable<any> {
    return this.http.post(apiUrl + 'logout', {}).pipe(
      map(response => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      })
    );
  }

  register(model: User): Observable<any> {
    return this.http.post(apiUrl + 'registration', JSON.stringify(model),
  {headers: {'Content-Type':'application/json; charset=UTF-8'}});
  }

  loggedIn() {
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser;
  }
}
