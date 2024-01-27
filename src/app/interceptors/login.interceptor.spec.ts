import { TestBed } from '@angular/core/testing';

import { LoginInterceptor } from './login.interceptor';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LoginInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [LoginInterceptor, HttpClient, HttpHandler],
    })
  );

  it('should be created', () => {
    const interceptor: LoginInterceptor = TestBed.inject(LoginInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
