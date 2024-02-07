import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

type typeRules = string[];

export const rulesGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const loginService = inject(LoginService);
  const user = loginService.getUser();
  const router = inject(Router);

  if (user) {
    return new Observable<boolean>((subscriber) => {
      loginService.getRules(user.id.toString()).subscribe((result) => {
        const itemRules = route.data['rules'] as typeRules;
        let finded = false;
        for (const item of itemRules) {
          finded = result.rules.includes(item);
          subscriber.next(finded);
          if (finded) break;
        }
        if (!finded) {
          router.navigateByUrl('/acesso-negado');
        }
      });
    });
  }
  return false;
};
