import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) { }
  isLoggedIn = new BehaviorSubject<boolean>(false);

  public logIn() {
    this.isLoggedIn.next(true);
    this.router.navigate(['home']);
  }

  public logOut() {
    this.isLoggedIn.next(false);
    this.router.navigate(['']);
  }

  public getStatus(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  public getIsLoggedIn() {
    return this.isLoggedIn.value;
  }
}
