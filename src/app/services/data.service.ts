import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { users } from './data';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  allUsers(): Observable<User[]> {
    return of(users).pipe(delay(500));
  }

  getUser(id: number): Observable<User> {
    return this.allUsers().pipe(
      map((users) => users.find((user) => user.id === id))
    );
  }

  searchUsers(term: string): Observable<User[]> {
    return this.allUsers().pipe(
      map((users) => users.filter((user) => user.name.includes(term)))
    );
  }
}
