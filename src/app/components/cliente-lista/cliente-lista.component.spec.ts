import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListaComponent } from './cliente-lista.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ClienteListaComponent', () => {
  let component: ClienteListaComponent;
  let fixture: ComponentFixture<ClienteListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ClienteListaComponent],
      providers: [ClienteService, Router, HttpClient, HttpHandler],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ClienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
