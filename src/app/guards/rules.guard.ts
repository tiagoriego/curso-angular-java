import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

export const rulesGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const user = loginService.getUser();
  if (user) {
    return new Observable<boolean>((subscriber) => {
      loginService.getRules(user.id.toString()).subscribe((result) => {
        subscriber.next(result.rules.includes(2));
      });
    });
  }
  return false;
};
