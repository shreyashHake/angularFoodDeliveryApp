import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
    );
  }
}
