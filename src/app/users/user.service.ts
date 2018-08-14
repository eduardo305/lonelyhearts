import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from './user.interface';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = 'https://randomuser.me/api/?results=5&noinfo';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<UserInterface>(this._url)
      .pipe(map(({ results }) => results.map(user => new User(user))));
  }
}
