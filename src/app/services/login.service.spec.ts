import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BASE_URL_CLIENT_API } from '../envs/env';
import { AccessToken, User } from '../interfaces/user-token';

describe('LoginService', () => {
  let loginService: LoginService;
  let httpMock: HttpTestingController;
  let baseUrl = BASE_URL_CLIENT_API;
  let mockUser: User = {
    name: 'Teste',
    email: 'teste@teste.com',
    id: 1,
    rules: [1, 2],
  };
  let mockAccessToken: AccessToken = {
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTcwNjM4NDgyMiwiZXhwIjoxNzA2Mzg4NDIyLCJzdWIiOiIxIn0.vazvQBUUTetC4Uckg3_kkPddrcW-HB0dJbDG3U0elpc',
    user: mockUser,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HttpClient],
    });
    loginService = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  it('should be failed get token', () => {
    loginService.logout();
    expect(loginService.getToken()).toBe(null);
  });

  it('should be failed is valid token', () => {
    expect(loginService.isValidToken()).toBe(false);
  });

  it('should be authenticated user', () => {
    loginService.auth(mockUser.email, '123456').subscribe((data) => {
      expect(data).toBe(mockAccessToken);
    });
    const req = httpMock.expectOne(`${baseUrl}/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockAccessToken);
  });

  it('should be is the same user email', () => {
    loginService.saveAccessToken(mockAccessToken);
    expect(loginService.getUser()?.email).toBe(mockUser.email)
  });
});
