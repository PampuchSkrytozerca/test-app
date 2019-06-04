import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    if ((localStorage.getItem('username') === 'test@test.com') && (localStorage.getItem('password') === 'test')) {
      return true;
    }
  }
}
