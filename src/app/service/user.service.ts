import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  headers: HttpHeaders;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  