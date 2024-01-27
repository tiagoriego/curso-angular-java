import { TestBed } from '@angular/core/testing';

import { AppInterceptor } from './app.interceptor';
import { LoginService } from '../services/login.service';
import { AppService } from '../services/app.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        AppInterceptor,
        LoginService,
        AppService,
        HttpClient,
        HttpHandler,
      ],
    })
  );

  it('should be created', () => {
    const interceptor: AppInterceptor = TestBed.inject(AppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
