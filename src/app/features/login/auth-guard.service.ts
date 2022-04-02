import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private logInService: LoginService, private router: Router) { }

  canActivate() {
    return this.logInService.getStatus().pipe(
      map(e => {
        if (e) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }),
      catchError((err) => {
        console.log('error');
        this.router.navigate(['login']);
        return of(false);
      })
    );
  }
}
