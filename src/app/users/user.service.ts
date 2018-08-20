import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from './user.interface';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = 'https://randomuser.me/api/?noinfo';
  filterSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getUsers(_qty, _gender): Observable<User[]> {
    let params = new HttpParams();
    params = params.append('results', _qty);
    if (_gender) {
      params = params.append('gender', _gender);
    }

    return this.http.get<UserInterface>(this._url, { params })
      .pipe(map(({ results }) => results.map(user => new User(user))));
  }
}
